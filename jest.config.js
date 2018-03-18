module.exports = {
  transform: {
    "^.+\.tsx?$": "ts-jest",
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'mjs',
    'json',
  ],
  testMatch: [
    '**/spec/**/*.ts?(x)',
    '**/?(*.)spec.ts?(x)',
  ],
  setupTestFrameworkScriptFile: './specs/setup-test.ts',
}
