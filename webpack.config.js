const MiniCssExtractPlugin = require('mini-css-extract-plugin');
let mode = 'production';
let target = 'web';

if(mode === 'production'){
    target = 'browserslist';
}

module.exports = {
    mode: mode,

    module:{
    rules:[
        {
            test:/\.js$/,
            exclude: /node_modules/,
            use:{
                loader: 'babel-loader'
            },
        },
        {
            test: /\.(s[ac]|c)ss$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader','sass-loader'],
        },
    ],
    },
    plugins: [new MiniCssExtractPlugin()],
    devtool:false,
    devServer: {
        static:'./dist',
        hot: true,
        open: true,
        port: 3000
    },
}