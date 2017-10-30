var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: "./app/src/app.js",
    module: {
        rules: [{
            test: /\.(jsx)$/,
            loader: 'babel-loader',
            exclude: /node_module/,
            query: {
                presets: ['react', 'es2015', 'stage-0'],
                plugins: ['react-html-attr', 'transform-class-properties', 'transform-decorators-legacy']
            }
          }
        ]
      },
    output: {
        path: __dirname + "/app/dist",
        filename: "app.js"
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
    ],
};