import type { Config } from 'jest';

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "v8",
  testEnvironment: "node",
  transform: {
    '^.+\\.tsx?$': 'ts-jest', // Transform TypeScript files
  },
  testMatch: [
    "**/__tests__/**/*.[jt]s?(x)",
    "**/?(*.)+(spec|test).[tj]s?(x)"
  ],
  testPathIgnorePatterns: [
    "/node_modules/",
    "/dist/"
  ],
  // setupFilesAfterEnv: ["<rootDir>/test/setupTests.ts"], // If you have any setup file
};

export default config;