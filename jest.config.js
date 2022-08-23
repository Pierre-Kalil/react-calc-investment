module.exports = {
  testPathIgnorePatterns: ["/node_modules"],
  setupFilesAfterEnv: ["<rooDir>/src/tests/setupTests.ts"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  testEnviroment: "jsdom",
};
