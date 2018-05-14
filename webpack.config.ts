import path from "path";
import webpack from "webpack";
import { AngularCompilerPlugin } from "@ngtools/webpack";

export default {
    mode: 'development',
    entry: {
        app: "./src/main.app.ts",
        polyfills: "./src/polyfills.ts"
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
            entryModule: "./src/app.module#AppModule",
            sourceMap: true
        })
    ],
    devtool: "inline-cheap-module-source-map",
    devServer: {
        contentBase: "./public",
        historyApiFallback: true,
    }
};
