import path from 'path';

export default {
    entry: [
        './client/src'
    ],
    output: {
        filename: 'react/bundle.js',
        path: path.resolve(__dirname, 'webroot/js'), // TODO: change to put it somewhere for cake
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