const replace = require('@rollup/plugin-replace');
const postcss = require('rollup-plugin-postcss');

module.exports = {
  // This function will run for each entry/format/env combination
  rollup(config, opts) {
    config.plugins = config.plugins.map(p =>
      p.name === 'replace'
        ? replace({
          'process.env.NODE_ENV': JSON.stringify(opts.env),
          preventAssignment: true,
        })
        : p
    );

    config.plugins.push(
      postcss({
        config: {
          path: './postcss.config.js',
        },
        extensions: ['.css'],
        minimize: true,
        inject: {
          insertAt: 'top',
        },
      })
    );

    return config; // always return a config.
  },
};
