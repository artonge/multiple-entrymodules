import path from "path";
import webpack from "webpack";

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'production',
    devtool: "source-map",
    entry: {
        polyfills: "./build/src/polyfills.js",
        app: `./build/src/main.app.js`,
        login: `./build/src/main.login.js`
    },
    output: {
        filename: "[name].js",
        path: path.resolve(`public`)
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["source-map-loader"],
                enforce: "pre"
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            excludeChunks: ["app"]
        }),
        new HtmlWebpackPlugin({
            template: "./src/app.html",
            filename: "app.html",
            excludeChunks: ["login"]
        })
    ],
    optimization: {
        minimize: false,
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "initial",
                    minChunks: 2,
                    minSize: 0
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all"
                }
            }
        }
    },
};
