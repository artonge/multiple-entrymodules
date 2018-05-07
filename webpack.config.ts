import { AngularCompilerPlugin } from "@ngtools/webpack";
import * as path from "path";
import * as webpack from "webpack";

export default {
    entry: {
        app: "./src/main.app.ts",
        login: "./src/main.login.ts",
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
            {
                test: /\.ts$/,
                use: ["@ngtools/webpack"]
            }
        ]
    },
    plugins: [
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core/,
            path.resolve("./src"),
            {}
        ),
        new AngularCompilerPlugin({
            tsConfigPath: "./src/tsconfig.json",
            entryModule: "./src/app.module#AppModule",
            sourceMap: true
        })
    ],
    devtool: "inline-cheap-module-source-map",
    devServer: {
        contentBase: "./public"
    }
};
