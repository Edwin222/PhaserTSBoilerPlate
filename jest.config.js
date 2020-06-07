module.exports = {
    roots: [
        "<rootDir>/test"
    ],
    transform: {
        "^.+\.ts$": "ts-jest"
    },
    testRegex: '^.+\.test\.ts$',
    moduleFileExtensions: ['ts', 'json', 'js'],
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.json'
        }
    }
}