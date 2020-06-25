const fs = require('node-fs-extra');
const path = require('path');

function loadFonts() {
    const modulePath = path.dirname(require.resolve('next-font-loader'));
    const fontPath = `${modulePath}/fonts`;
    const tmpPath = '/tmp/';

    return new Promise((resolve, reject) => {
        fs.copy(fontPath, tmpPath, err => {
            if (err) {
              reject(err);
            } else {
              resolve(tmpPath);
            }
        });
    });
}

module.exports = {
  loadFonts: loadFonts
};
