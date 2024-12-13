# Builder Stage
FROM node:iron-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Production Stage
FROM node:iron-alpine AS production
WORKDIR /app

LABEL name="nextjs-blog-template" \
  description="Jamstack Blog Website" \
  eu.mia-platform.url="https://www.mia-platform.eu"

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV NEXT_SHARP_PATH "/app/node_modules/sharp"

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy the public folder from the project as this is not included in the build process
COPY --from=builder --chown=nextjs:nodejs /app/public ./public
# copy the standalone folder inside the .next folder generated from the build process
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
# copy the static folder inside the .next folder generated from the build process
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

RUN touch ./off \
  && chmod o+rw ./off \
  && echo "nextjs-blog-template: $COMMIT_SHA" >> ./commit.sha

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]