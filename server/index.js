require('@babel/register')({
  ignore: [/(node_module)/],
  presets: ['@babel/preset-env']
})

require('./server');