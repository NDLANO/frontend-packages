/**
 * Copyright (c) 2016-present, NDLA.
 *
 * This source code is licensed under the GPLv3 license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

const chalk = require("chalk");
const babel = require("@babel/core");
const fs = require("fs");
const path = require("path");
const glob = require("glob");
const getPackages = require("./_getPackages");
const babelOptions = require("../babel.config");

const PACKAGES_DIR = path.resolve(__dirname, "..", "./packages");

babelOptions.babelrc = false;
const SRC_DIR = "src";
const JS_FILES_PATTERN = "**/*(*.js|*.jsx|*.ts|*.tsx)";
const IGNORE_PATTERN = "**/__tests__/**";
const STORYBOOK_PATTERN = "**/*.stories.*";
const OK = chalk.reset.inverse.bold.green(" DONE ");

const adjustToTerminalWidth = (str) => {
  const columns = process.stdout.columns || 80;
  // Account for ' DONE '
  const width = columns - 7;
  const strs = str.match(new RegExp(`(.{1,${width}})`, "g"));
  let lastString = strs[strs.length - 1];
  if (lastString.length < width) {
    lastString += Array(width - lastString.length).join(chalk.dim("."));
  }
  return strs.slice(0, -1).concat(lastString).join("\n");
};

function resolveDestPath(file, dest) {
  const packageName = path.relative(PACKAGES_DIR, file).split(path.sep)[0];
  const packageSrcPath = path.resolve(PACKAGES_DIR, packageName, SRC_DIR);
  const packageBuildPath = path.resolve(PACKAGES_DIR, packageName, dest);
  const relativeToSrcPath = path.relative(packageSrcPath, file);
  const destPath = path.resolve(packageBuildPath, relativeToSrcPath);

  if (destPath.endsWith(".jsx")) {
    // JSX file should be transformed to js files
    return destPath.substring(0, destPath.length - 1);
  }

  if (destPath.endsWith(".tsx")) {
    // TSX file should be transformed to js files
    return destPath.substring(0, destPath.length - 3) + "js";
  }

  if (destPath.endsWith(".ts")) {
    // ts file should be transformed to js files
    return destPath.substring(0, destPath.length - 2) + "js";
  }
  return destPath;
}

function removeBuildFile(file, dest) {
  const destPath = resolveDestPath(file, dest);
  fs.unlinkSync(destPath);
  process.stdout.write(
    `${chalk.red("\u2022 ") + chalk.red("Deleted \u21D2  ") + path.relative(PACKAGES_DIR, destPath)}\n`,
  );
}

function buildFile(file, dest, { silent = false, override = {} } = {}) {
  const destPath = resolveDestPath(file, dest);
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
  try {
    const options = {
      ...babelOptions,
      ...override,
    };
    const transformed = babel.transformFileSync(file, options).code;
    fs.writeFileSync(destPath, transformed);
    if (!silent) {
      process.stdout.write(
        `${path.relative(PACKAGES_DIR, file) + chalk.green(" \u21D2  ") + path.relative(PACKAGES_DIR, destPath)}\n`,
      );
    }
  } catch (e) {
    process.stdout.write(`${chalk.red("\u2022 ") + chalk.red(e)}\n`);
  }
}

const esPresetEnv = [
  "@babel/preset-env",
  {
    modules: false,
    targets: {
      browsers: ["> 0.25%", "not dead"],
    },
  },
];

const libPresetEnv = [
  "@babel/preset-env",
  {
    targets: {
      browsers: ["> 0.25%", "not dead"],
    },
  },
];

function buildNodePackage(p) {
  const srcDir = path.resolve(p, SRC_DIR);
  const pattern = path.resolve(srcDir, JS_FILES_PATTERN);
  const files = glob.sync(pattern, {
    nodir: true,
    ignore: [IGNORE_PATTERN, STORYBOOK_PATTERN],
  });

  process.stdout.write(adjustToTerminalWidth(`${path.basename(p)}`));

  const skipEmotion = p.endsWith("primitives") || p.endsWith("preset-panda");

  const presets = skipEmotion
    ? ["@babel/preset-typescript", ["@babel/preset-react", { runtime: "automatic" }]]
    : ["@babel/preset-typescript", ["@babel/preset-react", { runtime: "automatic", importSource: "@emotion/react" }]];

  const plugins = p.endsWith("primitives") || p.endsWith("preset-panda") ? [] : [...babelOptions.plugins];

  files.forEach((file) => {
    buildFile(file, "es", { silent: true, override: { presets: [esPresetEnv].concat(presets), plugins } });
    buildFile(file, "lib", {
      silent: true,
      override: {
        presets: [libPresetEnv].concat(presets),
        plugins,
      },
    });
  });
  process.stdout.write(`${OK}\n`);
}

function buildPackages() {
  const packages = getPackages();
  process.stdout.write(chalk.inverse("Building packages \n"));
  packages.forEach(buildNodePackage);
  process.stdout.write("\n");
}

if (process.argv[2] === "packages") {
  buildPackages();
}

if (process.argv[2] === "package") {
  buildNodePackage(process.cwd());
}

module.exports = {
  buildPackages,
  removeBuildFile,
  buildFile,
};
