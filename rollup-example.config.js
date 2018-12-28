import typescript from 'rollup-plugin-typescript2'

import pkg from './package.json'

export default {
  input: 'example/main.ts',
  output: [
    { file: './example/build/aurora.es.js', format: 'es' },
    { file: './example/build/aurora.cjs', format: 'cjs' }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {}),
  ],
  plugins: [
    typescript({
      typescript: require('typescript'),
      tsconfig: "tsconfig-example.json",
      verbosity: 3,
      check: true,
    }),
  ],
}

