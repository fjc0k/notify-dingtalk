module.exports = require('haoma').getCompileConfig({
  name: 'cjs',
  target: 'node',
  module: 'cjs',
  inputFiles: ['src/**/*.ts', '!**/__*', '!**/*.test.*'],
  outDir: 'lib',
  rollupDts: true,
})
