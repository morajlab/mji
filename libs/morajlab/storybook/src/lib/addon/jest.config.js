module.exports = {
  displayName: 'morajlab-storybook-src-lib-addon',
  preset: '../../../../../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory:
    '../../../../../../coverage/libs/morajlab/storybook/src/lib/addon',
};
