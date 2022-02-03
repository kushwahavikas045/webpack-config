const path = require("path");
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
    entry: "./src/index.js",
    output: {
         // output path is required for `clean-webpack-plugin`
         path: path.resolve(__dirname, "dist"),
        // this places all images processed in an image folder
        assetModuleFilename: "images/[hash][ext][query]",
      },
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
                use: [{
                    loader: MiniCssExtractPlugin.loader,
                    options: {publicPath: ""},
                },
                'css-loader',
                'sass-loader'],
            },
            {
                test: /\.(png|jpe?g|gif|svg)$/i,
                type: "asset",
            }
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