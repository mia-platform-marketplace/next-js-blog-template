/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    serverRuntimeConfig: {
      CRUD_PATH: "REPLACE_SERVER_ENV_CRUD_PATH",
      CRUD_FILE_PATH: process.env.CRUD_FILE_PATH,
      FILES_SERVICE_PATH: "REPLACE_SERVER_ENV_FILES_SERVICE_PATH",
      WEBSITE_BASE_PATH: "REPLACE_SERVER_ENV_WEBSITE_BASE_PATH"
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
          hostname: "REPLACE_SERVER_ENV_WEBSITE_BASE_PATH",
        }
      ],
    }
  }
  
  module.exports = nextConfig
  