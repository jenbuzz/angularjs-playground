const fs = require('fs-extra');
const concat = require('concat');

(async () => {
    const files = [
        './dist/elements-demo/runtime.js',
        './dist/elements-demo/polyfills.js',
        './dist/elements-demo/scripts.js',
        './dist/elements-demo/main.js',
    ]
    await fs.ensureDir('elements')
    await concat(files, 'elements/custom-element.js');
    await fs.copyFile('./dist/elements-demo/styles.css', 'elements/styles.css')
})()
