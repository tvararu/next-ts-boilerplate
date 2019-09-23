const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "babel-jest"
  },
  testPathIgnorePatterns: ["/.next/", "/node_modules/", "/cypress/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverage: true
};
