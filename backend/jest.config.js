module.exports = {
  testEnvironment: "jest-environment-node",
  setupFilesAfterEnv: ["./jest/setEnvVars.js", "./jest/jest.setup.js"],
  moduleNameMapper: {
    "^@src/(.*)$": "<rootDir>/src/$1",
    "^@test/(.*)$": "<rootDir>/test/$1",
    "^@mocks/(.*)$": "<rootDir>/test/mocks/$1",
  },
};
