const fs = require('fs-extra');

function loadFonts() {
    return new Promise((reject, resolve) => {
        fs.copy('/fonts', '/tmp/fonts', err => {
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
