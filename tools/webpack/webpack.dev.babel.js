import path from 'path';
import { SRC_DIR, DIST_DIR, PORT, packageSort } from '../config';
import extendBaseWebpackConfig from './webpack.base';

// Webpack plugins
import NoErrorsPlugin from 'webpack/lib/NoErrorsPlugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';

// PostCSS plugins
import postcssFocus from 'postcss-focus';
import cssnext from 'postcss-cssnext';
import autoprefixer from 'autoprefixer';
import assets from 'postcss-assets';

export default extendBaseWebpackConfig({

  entry: {
    polyfills: path.join(process.cwd(), SRC_DIR, 'polyfills.ts'),
    app: path.join(process.cwd(), SRC_DIR, 'bootstrap.ts')
  },

  output: {
    filename: '[name].ts',
    sourceMapFilename: '[name].map',
    chunkFilename: '[name].chunk.ts'
  },

  globalCssLoaders: [
    'style?sourceMap',
    'css', // ?sourceMap query needed?
    'postcss',
    'sass?sourceMap'
  ].join('!'),

  localCssLoaders: [
    'raw',
    'postcss',
    'sass?sourceMap'
  ].join('!'),

  postcssPlugins: [
    postcssFocus(),
    cssnext({ warnForDuplicates: false }),
    autoprefixer({ browsers: ['last 2 versions', 'IE > 10'] }),
    assets({
      basePath: path.join(process.cwd(), SRC_DIR),
      loadPaths: [
        path.join(process.cwd(), SRC_DIR, 'static/images'),
        path.join(process.cwd(), SRC_DIR, 'static/fonts')
      ]
    })
  ],

  plugins: [
    new NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), SRC_DIR, 'index.html'),
      chunksSortMode: packageSort(['polyfills', 'main'])
    })
  ],

  devServer: {
    contentBase: path.join(process.cwd(), SRC_DIR),
    port: PORT,
    historyApiFallback: true,
    stats: 'errors-only',
    outputPath: path.join(process.cwd(), DIST_DIR)
  },

  devtool: 'cheap-module-eval-source-map'
});




