# A statically generated blog example using Next.js, Markdown, and TypeScript

This example showcases Next.js's [Static Generation](https://nextjs.org/docs/app/building-your-application/routing/layouts-and-templates) feature using Markdown files as the data source.

The blog posts are stored in `/_posts` as Markdown files with front matter support. Adding a new Markdown file in there will create a new blog post.

To create the blog posts we use [`remark`](https://github.com/remarkjs/remark) and [`remark-html`](https://github.com/remarkjs/remark-html) to convert the Markdown files into an HTML string, and then send it down as a prop to the page. The metadata of every post is handled by [`gray-matter`](https://github.com/jonschlinkert/gray-matter) and also sent in props to the page.

# NextJS Blog Website

- Next JS 15
- npm package manager

## Local Development

```
nvm use v20.18.0
npm ci
npm run dev
```


## Docker run

Use env vars starting with `REPLACE_SERVER_ENV_` to have them substituted properly at runtime inside Docker or K8S

```
docker build . -t nextjsblog
docker run -it -p 3000:3000 -e CRUD_FILE_PATH="MY_ENV_VALUE" REPLACE_SERVER_ENV_FILES_SERVICE_PATH="1" nextjsblog
```

# Notes

`nextjs-blog-template` uses [Tailwind CSS](https://tailwindcss.com) [(v3.0)](https://tailwindcss.com/blog/tailwindcss-v3).
