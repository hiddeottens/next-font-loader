const fs = require('node-fs-extra');
const path = require('path');

function loadFonts() {
    return new Promise((resolve, reject) => {
        fs.copy('./node_modules/next-font-loader/fonts', './tmp', err => {
            if (err) {
              reject(err);
            } else {
              resolve(path.join(process.cwd(), '/tmp'));
            }
        });
    })
}

module.exports = {
  loadFonts: loadFonts
};
