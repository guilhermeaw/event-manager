export const routes = [
  {
    url: 'events',
    proxy: {
      target: "http://localhost:3001",
      changeOrigin: true,
      pathRewrite: {
        [`^/api/events`]: '',
      },
    }
  }
];
