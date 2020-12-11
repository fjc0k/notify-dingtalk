module.exports = require('haoma').getCompileConfig({
  name: 'cjs',
  target: 'node',
  module: 'cjs',
  inputFiles: ['src/*.ts'],
  outDir: 'lib',
  rollupDts: true,
})
