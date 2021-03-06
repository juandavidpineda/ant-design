module.exports = {
  setupFiles: [
    './tests/setup.js',
  ],
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'md',
  ],
  transform: {
    '\\.tsx?$': './node_modules/typescript-babel-jest',
    '\\.js$': './node_modules/babel-jest',
    '\\.md$': './node_modules/antd-demo-jest',
  },
  testRegex: 'demo\\.test\\.js$',
  testEnvironment: 'node',
  snapshotSerializers: [
    'enzyme-to-json/serializer'
  ],
};
