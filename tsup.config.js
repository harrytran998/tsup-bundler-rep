/**
 * @type {import('tsup').Options}
 */
module.exports = {
  clean: true,
  entryPoints: ['src/index.ts', 'src/is.ts', 'src/format/index.ts'],
  format: ['cjs', 'esm'],
  splitting: true,
  dts: true,
  ignoreWatch: ['**/{.git,node_modules}/**', 'dist', 'test'],
}
