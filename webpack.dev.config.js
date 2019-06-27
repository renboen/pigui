const merge = require("webpack-merge");
const baseConf = require("./webpack.base.config");
const webpack = require("webpack");
const HTMLWebpackPlugin = require("html-webpack-plugin");
console.log("-----------------------------------------");
const webpackDevConf = env => {
    return merge(baseConf, {
        mode: "development",
        module: {
            rules: [{
                    test: /\.(sa|sc|c)ss$/,
                    use: [
                        'vue-style-loader',
                        'css-loader',
                        'postcss-loader',
                        'sass-loader',
                    ],
                },

            ]
        },
        // watch: true,//webpack-dev-server --inline默认开启
        watchOptions: {
            aggregateTimeout: 300, // 每秒检查一次变动
            poll: 1000, //当第一个文件更改，会在重新构建前增加延迟
            ignored: /node_modules/
        },
        devtool: "inline-source-map",
        devServer: {
            host: 'localhost',
            port: 9000,
            hot: true,
            proxy: {}
        },
        plugins: [
            new webpack.HotModuleReplacementPlugin(),
            new webpack.DefinePlugin({
                DEBUG: JSON.stringify(true)
            })

        ]
    })
};
module.exports = webpackDevConf;