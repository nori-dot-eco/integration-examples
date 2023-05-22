require('@rushstack/eslint-patch/modern-module-resolution');

const { parserOptions } = require('@nori-dot-com/eslint-config-nori/rules');

module.exports = {
  extends: ['@nori-dot-com/eslint-config-nori'],
  parserOptions: parserOptions({
    projectDirectories: [
      'tsconfig.json',
      'examples/simple-nft-app/tsconfig.json',
    ],
    typescript: true,
    dir: __dirname,
    react: true,
  }),
};
