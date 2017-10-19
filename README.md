# server-factory

Simple package for creating Hapi server in a single line.

## Usage
```
createServer = require('@phelan/server-factory)
plugins = [HapiPluginConfig]
createServer({ plugins, options })
  .then(server => {
    server.start(<callback>);
  });
```  
## Todo
- add extension for connections config
- add extension for initialisation function
- add extension for server config
