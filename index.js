// compile files
require('@babel/register')

// fix @babel/polyfill (deprecated)
require('core-js/stable')
require('regenerator-runtime/runtime')

// main server file
require('./src/server')