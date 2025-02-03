const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = {
    target: ["web", "es5"],
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
    },
    devtool: "inline-source-map",

    module: {
        rules: [
            {
                test: /\.js/,
                use: "babel-loader",
                exclude: "/node_modules/",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({ template: "./src/template.html" })],
};
module.exports = config;
