/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    serverRuntimeConfig: {
      CRUD_PATH: process.env.CRUD_PATH ? process.env.CRUD_PATH : "REPLACE_SERVER_ENV_CRUD_PATH",
      FILES_SERVICE_PATH: process.env.FILES_SERVICE_PATH ? process.env.FILES_SERVICE_PATH : "REPLACE_SERVER_ENV_FILES_SERVICE_PATH",
      WEBSITE_BASE_PATH: process.env.WEBSITE_BASE_PATH ? process.env.WEBSITE_BASE_PATH : "REPLACE_SERVER_ENV_WEBSITE_BASE_PATH"
    },
    publicRuntimeConfig: {
      PUBLIC_FILES_PATH: '/files-service',
    },
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: 'localhost'
        },
        {
          protocol: 'https',
          hostname: 'jamstack-test.mia-demo-re5gu6.gcp.mia-platform.eu'
        }
      ],
    }
  }
  
  module.exports = nextConfig
  