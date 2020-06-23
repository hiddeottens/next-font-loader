const fs = require('node-fs-extra');
const path = require('path');

function loadFonts() {
    const modulePath = require.resolve('next-font-loader');
    return new Promise((resolve, reject) => {
        fs.copy(`${modulePath}/fonts`, '/tmp', err => {
            if (err) {
              reject(err);
            } else {
              resolve(path.join(process.cwd(), '/tmp'));
            }
        });
    });
}

module.exports = {
  loadFonts: loadFonts
};
