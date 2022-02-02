let mode = 'development';

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
    ]
    },
    devtool:false,
    devServer: {
        static:'./dist',
        open: true,
        port: 3000
    },
}