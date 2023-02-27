#!/usr/bin/env node
const { ESLint } = require("eslint");
const path = require("path");
const config = require('../index');

(async function main() {
    "use strict"
    const args = process.argv.slice(2);
    // 1. Create an instance
    const extArg = args.find(element => element.startsWith('--ext='))
    const extensions = extArg.replace('--ext=', '')
    const eslint = new ESLint({
        fix: args.includes("--fix"),
        baseConfig: config,
        extensions: extensions.split(','),
        resolvePluginsRelativeTo: path.resolve(__dirname, '../node_modules')
    });

    // 2. Lint files. This doesn't modify target files.
    const pathArg = args.find(element => element.startsWith('--path='))
    const pattern = pathArg.replace('--path=', '')
    const results = await eslint.lintFiles([pattern]);

    // 3. Modify the files with the fixed code.
    await ESLint.outputFixes(results);

    // 4. Format the results.
    const formatter = await eslint.loadFormatter("stylish");
    const resultText = formatter.format(results);

    // 5. Output it.
    console.log(resultText);
})().catch((error) => {
    process.exitCode = 1;
    console.error(error);
});