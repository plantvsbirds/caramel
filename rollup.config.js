// server
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import copy from 'rollup-plugin-copy'

// modules
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'
import path from 'path'
import alias from 'rollup-plugin-alias';

// js
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'


// style
import stylModule from 'rollup-plugin-stylus'

// other static
import json from 'rollup-plugin-json'

export default {
  name: 'caramel',
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  watch: {
    include: 'src/**',
  },
  plugins:[
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    alias({
      resolve: ['.jsx', '.js'],
      '~components': path.resolve(__dirname, 'src/components/'),
    }),
    json(),
    copy({
      "src/index.html": "dist/index.html",
    }),
    resolve({
      jsnext: true,
      main: true,
      extensions: [ '.js', '.jsx' ],
    }),
    commonjs({
      namedExports: {
        './node_modules/react/react.js' : 
        [
          'cloneElement', 
          'createElement', 
          'PropTypes', 
          'Children', 
          'Component'
        ],
      }
    }),
    babel({
      include: ['**/*.js', '**/*.jsx'],
      exclude: 'node_modules/**'
    }),
    stylModule({
      output: 'dist/bundle.css'
    }),
    serve({
      contentBase: 'dist',
      historyApiFallback: true,
    }),
    livereload({
      watch: 'dist',
    }),
  ]
}
