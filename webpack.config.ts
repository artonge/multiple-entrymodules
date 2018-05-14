import path from "path";
import webpack from "webpack";

import HtmlWebpackPlugin from 'html-webpack-plugin';

export default {
    mode: 'development',
    entry: {
        polyfills: "./src/polyfills.ts",
        app: "./src/main.app.ts",
        login: "./src/main.login.ts"
    },
    output: {
        filename: "[name].js",
        path: path.resolve("public")
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loaders: [
                    {
                        loader: "awesome-typescript-loader",
                        options: { configFileName: "src/tsconfig.json" },
                    },
                    "angular2-template-loader",
                ],
                exclude: /node_modules/,
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
    devtool: "inline-cheap-module-source-map",
    devServer: {
        contentBase: "./public",
    }
};
