// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      boxShadow: {
        'multi-depth': `
          0px 0px 0px 0px #00000017,
          0px 1px 1px 0px #00000017,
          0px 2px 2px 0px #00000014,
          0px 5px 3px 0px #0000000d,
          0px 9px 4px 0px #00000003,
          0px 14px 4px 0px #00000000
        `,
      },
    },
  },
};
