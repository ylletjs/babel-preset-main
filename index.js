// Modeled on create-react-app preset
// https://github.com/facebook/create-react-app/tree/master/packages/babel-preset-react-app

module.exports = function () {
  return {
    presets: [
      [
        require('@babel/preset-env'),
        {
          useBuiltIns: 'entry',
          corejs: 3,
          modules: process.env.BABEL_ENV === 'esm' ? false : 'cjs',
          exclude: ['transform-typeof-symbol']
        }
      ],
      [require('@babel/preset-react'), { useBuiltIns: true }]
    ],
    plugins: [
      require('@babel/plugin-proposal-class-properties'),
      [require('@babel/plugin-proposal-object-rest-spread'), { useBuiltIns: true }],
      [
        require('@babel/plugin-transform-runtime'),
        {
          corejs: false,
          helpers: false,
          version: require('@babel/runtime/package.json').version,
          regenerator: true
        }
      ],
      require('@babel/plugin-transform-object-assign')
    ]
  };
};
