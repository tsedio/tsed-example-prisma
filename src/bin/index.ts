import {generatorHandler} from "@prisma/generator-helper";
import {parseEnvValue} from "@prisma/sdk";
import {transformDMMF} from "./generator/transformDMMF";
import * as fs from "fs";
import * as path from "path";

generatorHandler({
  onManifest() {
    return {
      defaultOutput: "./tsed",
      prettyName: "Prisma Ts.ED Schema Generator"
    };
  },
  async onGenerate(options) {
    const jsonSchema = transformDMMF(options.dmmf);
    if (!options.generator.output) {
      throw new Error("No output was specified for Prisma Schema Generator");
    }
      const outputDir =
        // This ensures previous version of prisma are still supported
        typeof options.generator.output === "string"
          ? ((options.generator.output as unknown) as string)
          : // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            parseEnvValue(options.generator.output);
      try {
        await fs.promises.mkdir(outputDir, {
          recursive: true
        });
        await fs.promises.writeFile(path.join(outputDir, "json-schema.json"), JSON.stringify(jsonSchema, null, 2));
      } catch (e) {
        console.error("Error: unable to write files for Prisma Schema Generator");
        throw e;
      }
    }
  }
});
