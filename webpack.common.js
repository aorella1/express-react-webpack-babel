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
            query: {
              //@babel/preset-env: Compile ES6+ to ES5 js
              //@babel/preset-react: Convert JSX to js
              presets: ["@babel/preset-env", "@babel/preset-react"]
            }
          }
        ]
      },
      {
        test: /\.html$/,
        //requre files in html such as .svg
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
