module.exports = function override(config, env) {
    config.plugins.push(new MonacoWebpackPlugin({
      languages: ['json']
    }));
    return config;
  }