import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { BuildOptions } from "./types/config";
export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: "babel-loader",
      options: {
        presets: ["@babel/preset-env"],
        "plugins": [
          ["i18next-extract", {
          "locales": [
            "ru",
            "en"
          ],
          "keyAsDefaultValue": true
        }]
        ]
      },
    },
  };
  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };
  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      options.isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: (resPath: string) => resPath.includes(".module."),
            localIdentName: options.isDev
              ? "[path][name]__[local]"
              : "[hash:base64:8]",
          },
        },
      },
      "sass-loader",
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  return [babelLoader, typescriptLoader, cssLoader, fileLoader, svgLoader];
}
