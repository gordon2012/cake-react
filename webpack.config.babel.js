import path from 'path';

export default {
    entry: [
        './src'
    ],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname, 'CakeProject/webroot'), // TODO: change to put it somewhere for cake
        publicPath: '/client/static',
    },
    module: {
        rules: [
            { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    }
}