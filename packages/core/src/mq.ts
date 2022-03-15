const mq = {
  range: ({ from, until }: { from?: string; until?: string }) =>
    `${from ? `@media (min-width: ${from})` : ''}${from && until ? ' and ' : ''}${!from && until ? '@media ' : ''}${
      until ? `(max-width: ${until})` : ''
    }`,
};

export default mq;
