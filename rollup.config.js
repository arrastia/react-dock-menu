/* eslint-disable @typescript-eslint/no-var-requires */
const typescript = require('rollup-plugin-typescript2');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  input: 'src/index.ts',
  output: [
    { file: 'dist/index.js', format: 'cjs' },
    { file: 'dist/index.esm.js', format: 'es' }
  ],
  plugins: [typescript({ typescript: require('typescript') }), postcss({ extract: true, modules: true })]
};
