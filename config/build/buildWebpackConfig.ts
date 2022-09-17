import path from "path";
import webpack from "webpack";
import { buildLoaders } from "./buildLoader";
import { buildPlugins } from "./buildPlugins";
import { buildResoulvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { paths, mode } = options;
  return {
    mode: mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(),
    },
    resolve: buildResoulvers(),
  };
}
