const composer = require('./composer');
const createManifest = require('./manifest');

module.exports = function createServer({ plugins, options, connections }) {
  const manifest = createManifest();
  if (plugins) manifest.registerPlugins(plugins);
  return composer.compose(manifest.get(), options);
};
