module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(s?css|less)$': 'identity-obj-proxy',
  },
  moduleDirectories: [
    'node_modules',
  ],
  globals: {
    'ts-jest': {
      tsConfig: 'tsconfig.json',
    },
  },
  collectCoverageFrom: [
    '**/*.{ts,tsx}',
    '!**/*.d.ts',
    '!**/index.ts'
  ],
};
