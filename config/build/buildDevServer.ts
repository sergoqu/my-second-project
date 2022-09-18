import { BuildOptions } from "./types/config";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function buildDevServer(optionts: BuildOptions): DevServerConfiguration {
  return {
    port: optionts.port,
    open: true,
    historyApiFallback: true,
  };
}
