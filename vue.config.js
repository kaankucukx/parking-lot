// vue.config.js
module.exports = {
  configureWebpack: {
    entry: {
      styles: [
        './src/assets/sanitize.css',
        './src/assets/fonts.css',
      ],
    },
    module: {
      rules: [{
        test: /\.(eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          name: 'fonts/[name].[ext]',
        },
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
      },
      {
        test: /\.(gif|png|jpe?g)$/i,
        use: [{
          loader: 'image-webpack-loader',
          options: {

            mozjpeg: {
              progressive: true,
              quality: 65,
            },
            // optipng.enabled: false will disable optipng
            optipng: {
              enabled: false,
            },
            pngquant: {
              quality: '90',
              speed: 4,
            },
            gifsicle: {
              interlaced: false,
            },
            // the webp option will enable WEBP
            webp: {
              enabled: false,
            },

          },
        }],
      },
      ],
    },
    devServer: {
      contentBase: './dist',
      historyApiFallback: {
        rewrites: [{
          from: /^\/$/,
          to: '/',
        }],
      },
      hot: true,
      compress: true,
      open: true,
      port: 3333,
    },
  },
};
