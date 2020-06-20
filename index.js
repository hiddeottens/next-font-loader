const fs = require('fs-extra');

function loadFonts() {
    return new Promise((reject, resolve) => {
        fs.copy('/node_modules/font-loader/fonts', '/tmp', err => {
            if (err) {
              reject(err);
            } else {
              resolve('/tmp/fonts');
            }
        });
    })
}

module.exports = {
  loadFonts: loadFonts
};
