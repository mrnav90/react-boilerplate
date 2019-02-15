module.exports = {
  coverageThreshold: {
    global: {
      statements: 98,
      branches: 91,
      functions: 98,
      lines: 98,
    },
  },
  moduleDirectories: ['node_modules', 'src'],
  moduleNameMapper: {
    '^components[/](.+)': '<rootDir>/src/components/$1',
    '^containers[/](.+)': '<rootDir>/src/containers/$1',
    '^config[/](.+)': '<rootDir>/src/config/$1',
    '^api[/](.+)': '<rootDir>/src/api/$1',
    '^pages': '<rootDir>/src/pages',
    '^utils': '<rootDir>/src/utils',
  },
  setupFiles: ['raf/polyfill', '<rootDir>/enzyme.setup.js'],
};
