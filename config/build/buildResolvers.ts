import { ResolveOptions } from "webpack";

export function buildResoulvers(): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
  };
}
