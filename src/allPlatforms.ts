import { join } from "path";
import downloadPlatform from "./downloadPlatform.js";
import packageSpecs from "./nugetPackages.js";

export default async function downloadAllPlatforms(path: string) {
  await Promise.all(
    packageSpecs.map((spec) =>
      downloadPlatform(join(path, spec.platform), spec)
    )
  );
}