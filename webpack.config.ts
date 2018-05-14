import path from "path";
import webpack from "webpack";
import { AngularCompilerPlugin } from "@ngtools/webpack";
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import HtmlWebpackPlugin from "html-webpack-plugin"


export default {
    mode: 'development',
    entry: {
        app: "./src/main/main.app.ts"
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
            { test: /\.ts$/, use: ["@ngtools/webpack"] }
        ]
    },
    plugins: [
        new AngularCompilerPlugin({
            tsConfigPath: "./src/tsconfig.json",
            entryModule: "./src/main/main.module#MainModule",
            sourceMap: true
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html",
            filename: "index.html",
            chunksSortMode: "none",
            inject: false,
        }),
        new BundleAnalyzerPlugin(),
    ],
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    name: "commons",
                    chunks: "all",
                    minChunks: 2,
                    minSize: 0,
                    priority: 1
                },
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendors",
                    chunks: "all",
                    priority: 2
                }
            }
        }
    },
    devtool: "inline-cheap-module-source-map",
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
    }
};
