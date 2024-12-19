// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom'
import 'next'
import {TextEncoder, TextDecoder} from 'util'

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder


jest.mock('next/config', () => () => ({
  serverRuntimeConfig: {
    CRUD_PATH: 'http://test_crud_path',
    FILES_SERVICE_PATH: 'http://test_files_service_path',
    WEBSITE_BASE_PATH: 'http://test_website_base_path'
  },
  publicRuntimeConfig: {
    PUBLIC_FILES_PATH: 'http://test_public_files_path',
  },
}))