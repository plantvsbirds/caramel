// server
import serve from 'rollup-plugin-serve'
import livereload from 'rollup-plugin-livereload'
import copy from 'rollup-plugin-copy'

// modules
import commonjs from 'rollup-plugin-commonjs'
import resolve from 'rollup-plugin-node-resolve'

// js
import babel from 'rollup-plugin-babel'
import replace from 'rollup-plugin-replace'


// style
import stylusCssModules from 'rollup-plugin-stylus-css-modules';

// other static
import json from 'rollup-plugin-json'

export default {
  name: 'caramel',
  input: 'src/index.js',
  output: {
    file: 'dist/bundle.js',
    format: 'iife'
  },
  plugins:[
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
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
      exclude: 'node_modules/**'
    }),
    stylusCssModules({
      output: 'bundle.css'
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
