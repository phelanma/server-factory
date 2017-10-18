function getDefaultManifest() {
  return {
    server: {},
    connections: [],
    registrations: [],
  };
}

class Manifest {
  constructor() {
    this._registeredPlugins = new Map();
    this._manifest = getDefaultManifest();
  }

  _isPluginRegistered(name) {
    return this._registeredPlugins.has(name);
  }

  _registerPlugin(config) {
    if (!this._isPluginRegistered(config.plugin.register)) {
      const idx = this._manifest.registrations.push(config) - 1;
      this._registeredPlugins.set(config.plugin.register, { config, idx });
    }
  }

  get() {
    return Object.assign({}, this._manifest);
  }

  registerPlugins(plugins) {
    if (Array.isArray(plugins)) {
      plugins.forEach(config => this._registerPlugin(config));
    }
  }

  removePlugin(name) {
    const plugin = this._registeredPlugins.get(name);
    if (plugin) {
      this._manifest.registrations = [].concat(
        this._manifest.registrations.slice(0, plugin.idx),
        this._manifest.registrations.slice(plugin.idx + 1)
      );
      this._registeredPlugins.delete(name);
    }
  }
}

module.exports = function createManifest(){
  return new Manifest();
}
