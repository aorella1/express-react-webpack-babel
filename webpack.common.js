const path = require('path');

module.exports = {
  entry: {
    main: './src/index.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: [
          {
            loader: 'babel-loader',
            options: {

              presets: [
                //@babel/preset-env: Compile ES6+ to ES5 js
                //@babel/preset-react: Convert JSX to js
                "@babel/preset-env",
                "@babel/preset-react"],
              plugins: [
                //@babel/plugin-syntax-dynamic-import: async/await sntax with dynamic import and compatibility w/ @loadable/compnents.
                //@loadable/babel-plugin: automatic dynamic chunk naming and SSR dynamic import compatibility
                '@babel/plugin-syntax-dynamic-import',
                '@loadable/babel-plugin'
              ]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        //requre files in html such as .svg, .png, etc.
        use: ['html-loader']
      },
      {
        //Test for images
        test: /\.(svg|png|jpg|jpeg|gif)$/,
        use: {
          //copy files to build dir with hash
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/media"
          }
        }
      },
      {
        //Test for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: {
          //copy files to build dir with hash
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "assets/fonts"
          }
        }
      }
    ]
  }
};
