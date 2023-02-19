const nextJest = require("next/jest");
const createJestConfig = nextJest({
  dir: "./",
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    "^@theme/(.*)$": "<rootDir>/src/theme/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@redux/(.*)$": "<rootDir>/src/redux/$1",
    "^@services/(.*)$": "<rootDir>/src/services/$1",
  },
  testEnvironment: "jest-environment-jsdom",
};

module.exports = createJestConfig(customJestConfig);
