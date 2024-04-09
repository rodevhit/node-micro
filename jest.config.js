module.exports = {
    moduleFileExtensions: ["js", "json", "ts"],
    rootDir: "src",
    testEnvironment: "node",
    testRegex: ".*\\.spec\\.ts$",
    transform: {
        "^.+\\.(t|j)s$": "ts-jest",
    },
    restoreMocks: true,
    collectCoverageFrom: ["**/*.(t|j)s"],
    coverageDirectory: "../coverage"
}