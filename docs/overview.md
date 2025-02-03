# Next.js Blog Template Documentation

## Overview

This documentation provides an overview and setup guide for a Next.js blog template connected to a CMS. The template utilizes Next.js 14 and Node.js 20 to deliver a modern, efficient blogging platform.

## Prerequisites

Before you begin, ensure you have the following installed:

1. Node.js 20 (or later)

2. npm (Node Package Manager)

You can check your Node.js and npm versions by running:

- `node -v`
- `npm -v`

Installation Steps

Follow these steps to set up and run the application:

1. Install Dependencies
Clone the repository and navigate to the project directory. Then, install the required dependencies by running `npm install`

2. Start the Mocked Server
To use the mocked server, execute `npm run start:stubby` command. This will start the stub server to simulate server responses during development.

3. Run the Development Server
To start the website, run `npm run dev`

This command will launch the development server, and the application will be available at http://localhost:3000 by default.

::: notes :::

Ensure the mocked server is running before starting the development server to avoid issues with CMS data fetching.

For production deployment, consult the Next.js and CMS documentation to properly configure and deploy your application.

### Environment Variables

1. You can pass the RuntimeConfig to the nextjs aplication by setting up them in environemnt variables.
2. Remember to fill the `MONGODB_URL` with the correct value to correctly run the `crud-service`.
3. Configure the `LOG_LEVEL` value for each environemnt correctly!

### Troubleshooting

- If you encounter dependency errors, ensure your Node.js and npm versions meet the prerequisites.

- Check the project’s package.json for any specific dependency version requirements.

- Restart both the mocked server and development server if you encounter unexpected behavior. Remember before running the development server your mocked server should be up and running.


