export const routes = [
  {
    url: 'events',
    proxy: {
      target: "http://localhost:3001",
      changeOrigin: true,
      pathRewrite: {
        [`^/api`]: '',
      },
    }
  },
  {
    url: 'users',
    proxy: {
      target: "http://localhost:3002",
      changeOrigin: true,
      pathRewrite: {
        [`^/api`]: '',
      },
    }
  },
  {
    url: 'sessions',
    proxy: {
      target: "http://localhost:3002",
      changeOrigin: true,
      pathRewrite: {
        [`^/api`]: '',
      },
    }
  }
];
