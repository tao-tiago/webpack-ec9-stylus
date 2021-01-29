const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './assets/scripts/main.js'],
    output: {
        path: path.resolve(__dirname, './build/js'),
        filename: 'app.min.js'
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
            }
        }]
    }
};