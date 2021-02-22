const path = require('path')
const nodeExternals = require('webpack-node-externals')

const common = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
      },
    ],
  },
}

const clientConfig = {
  ...common,
  mode: 'development',
  entry: {
    client: './src/client.js'
  },
  target: 'web',

  output: {
    path: path.resolve('build'),
    filename: 'client.js',
  },
}

const serverConfig = {
  ...common,
  mode: 'development',
  entry: {
    server: './index.js'
  },
  target: 'node',
  externals: [nodeExternals()],

  output: {
    path: path.resolve('build'),
    filename: 'server.js',
  },
}

module.exports = [clientConfig, serverConfig]
