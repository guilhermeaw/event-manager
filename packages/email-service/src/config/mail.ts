interface IMailConfig {
  driver: 'ses';
  defaults: {
    from: {
      email: string;
      name: string;
    };
  };
}

export default {
  driver: 'ses',
  defaults: {
    from: {
      email: 'guilherme.w@universo.univates.br',
      name: 'GuiLucas',
    },
  },
} as IMailConfig;
