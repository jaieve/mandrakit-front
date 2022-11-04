const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/test/v1/users/',
    createProxyMiddleware({
      target: 'https://localhost:1469',
      changeOrigin: true,
    })
  )
}