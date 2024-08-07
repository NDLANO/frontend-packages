/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import { readFile, readdir, stat, writeFile } from "fs/promises";
import { join, dirname } from "path";
import { transform } from "@svgr/core";

const __dirname = dirname(new URL(import.meta.url).pathname);
const rootDir = join(__dirname, "..", "packages", "ndla-icons");
const today = new Date(new Date().setHours(0, 0, 0, 0));

const copyright = await readFile(join(__dirname, "..", "COPYRIGHT"), "utf-8");

const autoNotice = `// N.B! AUTOGENERATED FILE. DO NOT EDIT`;
const imports = `import Icon, { Props } from '../Icon'`;

const allFileNames = await readdir(`${rootDir}/svg`, { recursive: true });
const svgFiles = allFileNames.filter((file) => file.endsWith(".svg"));
const allFiles = await Promise.all(
  svgFiles.map(async (filename) => {
    const filePath = `${rootDir}/svg/${filename}`;
    const { ctime, mtime } = await stat(filePath);
    const file = await readFile(filePath, "utf8");
    return { filename, file, ctime, mtime };
  }),
);
const filePromises = allFiles.map(async ({ filename, file, ctime, mtime }) => {
  if (mtime && mtime < today) return;
  const [folderName, iconName] = filename.split("/");
  const componentName = iconName.split(".")[0];
  const regexPattern = /(\d{4})-/g; // This finds the year so we can replace it with current year in the .tsx file
  const component = await transform(
    file,
    {
      jsxRuntime: "automatic",
      typescript: true,
      plugins: ["@svgr/plugin-svgo", "@svgr/plugin-jsx", "@svgr/plugin-prettier"],
      svgo: true,
      svgoConfig: {
        multipass: true,
        plugins: [
          {
            name: "cleanupListOfValues",
            params: {
              overrides: {
                floatPrecision: 2,
              },
            },
          },
          {
            name: "preset-default",
            params: {
              overrides: {
                cleanupNumericValues: { floatPrecision: 2 },
                convertPathData: { floatPrecision: 2 },
                convertTransform: { floatPrecision: 2 },
              },
            },
          },
          "mergePaths",
          "removeXMLNS",
        ],
      },
      template: (variables, { tpl }) => {
        return tpl`
            ${copyright.replace(regexPattern, `${ctime.getFullYear()}-`)}

            ${autoNotice}

            ${imports}


            ${variables.interfaces};

            const ${variables.componentName} = (props: Props) => (
              ${variables.jsx}
            );

            ${variables.exports};
            `;
      },
    },
    { componentName, filePath: `${rootDir}/src/${folderName}/${componentName}.tsx` },
  );

  const componentWithIcon = component.replace("<svg", "<Icon").replace("</svg>", "</Icon>");
  await writeFile(`${rootDir}/src/${folderName}/${componentName}.tsx`, componentWithIcon);
});

const packages = svgFiles.reduce((acc, file) => {
  const [packageName, icon] = file.split("/");
  if (!acc[packageName]) {
    acc[packageName] = [icon];
  } else {
    acc[packageName].push(icon);
  }
  return acc;
}, {});

const indexPromises = Object.entries(packages).map(async ([packageName, icons]) => {
  const exports = icons
    .map((icon) => `export { default as ${icon.split(".")[0]} } from "./${icon.split(".")[0]}";`)
    .join("\n");
  const file = `${copyright}\n${autoNotice}\n${exports}\n`;
  await writeFile(`${rootDir}/src/${packageName}/index.ts`, file);
});

await Promise.all(filePromises);
await Promise.all(indexPromises);
