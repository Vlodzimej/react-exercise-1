const { join } = require('path');

module.exports = {
    entry: join(__dirname, 'src', 'index.js'),
    mode: 'development',
    devtool: 'source-map',
    output: {
        filename: './bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    devServer: {
        contentBase: join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        watchContentBase: true,
        progress: true,
    },
};
