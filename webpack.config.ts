import path from "path";
import webpack from "webpack";
import { AngularCompilerPlugin } from "@artonge/webpack";

export default {
    mode: 'development',
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
                use: ["@artonge/webpack"]
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
            entryModules: ["./src/app.module#AppModule", "./src/login.module#LoginModule"],
            sourceMap: true
        })
    ],
    devtool: "inline-cheap-module-source-map",
    devServer: {
        contentBase: "./public"
    }
};
