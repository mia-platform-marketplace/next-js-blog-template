/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone',
    reactStrictMode: true,
    serverRuntimeConfig: {
      CRUD_PATH: "http://crud-service",
      FILES_SERVICE_PATH: "REPLACE_SERVER_ENV_FILES_SERVICE_PATH",
      WEBSITE_BASE_PATH: "https://jamstack-test.mia-demo-re5gu6.gcp.mia-platform.eu"
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
  