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
  },
  {
    url: 'users',
    proxy: {
      target: "http://localhost:3002",
      changeOrigin: true,
      pathRewrite: {
        [`^/api/users`]: '',
      },
    }
  },
  {
    url: 'certificates',
    proxy: {
      target: "http://localhost:3003",
      changeOrigin: true,
      pathRewrite: {
        [`^/api/certificates`]: '',
      },
    }
  },
];
