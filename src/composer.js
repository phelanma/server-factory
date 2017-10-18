const Glue = require('glue');

const defaultOpts = {
  relativeTo: __dirname,
};

function defaultCallback() {
  console.log('server running');
}

exports.compose = function (manifest, options) {
  const opts = Object.assign(defaultOpts, options);
  return Glue.compose(manifest, opts || {})
    .then(server => ({
      start(callback) {
        if (callback && typeof callback !== 'function') { throw Error('Server.start() requires a callback function'); }
        server.start(callback || defaultCallback);
      },
    }));
};
