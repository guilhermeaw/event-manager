import { createProxyMiddleware } from 'http-proxy-middleware';

export const setupProxies = (app, routes) => {
  routes.forEach(route => {
    app.use(`/api/${route.url}`, createProxyMiddleware(route.proxy));
  });
}
