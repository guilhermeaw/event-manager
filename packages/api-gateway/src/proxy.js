import { createProxyMiddleware } from 'http-proxy-middleware';

export const setupProxies = (app, routes) => {
  routes.forEach(route => {
    const restream = function(proxyReq, req, res, options) {
      if (req.body) {
          let bodyData = JSON.stringify(req.body);
          // incase if content-type is application/x-www-form-urlencoded -> we need to change to application/json
          proxyReq.setHeader('Content-Type','application/json');
          proxyReq.setHeader('Content-Length', Buffer.byteLength(bodyData));
          // stream the content
          proxyReq.write(bodyData)
          proxyReq.end();
      }
    }

    app.use(`/api/${route.url}`, createProxyMiddleware({ ...route.proxy, onProxyReq: restream }));
  });
}
