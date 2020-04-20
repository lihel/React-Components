module.exports = (appInfo) => {
  const config = (exports = {})
  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + 'keykeykey'
  // add your middleware config here
  config.middleware = []
  // add your user config here

  return {
    ...config,
  }
}
