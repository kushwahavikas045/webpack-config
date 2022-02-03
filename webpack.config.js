const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'production';
let target = 'web';

if (mode === 'production') {
    target = 'browserslist';
}

module.exports = {
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    performance: {
        hints: false
      },
      optimization: {
        splitChunks: {
          minSize: 10000,
          maxSize: 250000,
        }
      },
    mode: mode,
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                },
            },
            {
                test: /\.(s[ac]|c)ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
            },
        ],
    },
    plugins: [new MiniCssExtractPlugin()],
    devServer: {
        static: './dist',
        hot: true,
        open: true,
        port: 3000
    },
    resolve:{
        extensions:[".js", ".jsx"],
    }
}