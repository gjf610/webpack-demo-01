const HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'index.[contenthash].js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'xiao Wang',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gjf)$/,
                loader: ["file-loader"],
            },
            {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"], // compiles Styl to CSS
            },
            {
                test: /\.less$/i,
                loader: ["style-loader", "css-loader", "less-loader"],
            },
            {
                test: /\.scss$/i,
                loader: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    {
                        loader: "sass-loader",
                        options: { implementation: require("dart-sass") }
                    },
                ],
            },
        ],
    },
};