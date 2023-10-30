const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use(
  '/api',
  createProxyMiddleware({
    target: 'http://localhost:9090',
    changeOrigin: true,
  })
);

// ...other routes and middleware

app.listen(9091, () => {
  console.log('Server is running on port 9091');
});