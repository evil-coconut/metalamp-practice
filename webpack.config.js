const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const PAGES = [
  'index'
];

const PATHS = {
  dist: path.resolve(__dirname, './dist'),
  src: path.resolve(__dirname, './src'),
  media: path.resolve(__dirname, './src/media'),
  styles: path.resolve(__dirname, './src/styles'),
  parts: path.resolve(__dirname, './src/parts')
};

module.exports = {
    entry: (() => {
        const entries = {};
        PAGES.forEach(page => entries[page] = PATHS.src + `/pages/${page}/${page}.js`);
        return entries;
    })(),

    output: {
        path: PATHS.dist,
        filename: 'js/[name].js',
        assetModuleFilename: 'assets/[name][ext]',
        clean: true
    },
    experiments: {
        asset: true
    },
        
    module: {
        rules: [
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                    options: {
                        pretty: true
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                use: 'svgo-loader'
            },
        ]
    },

    resolve: {
        alias: {
            media: PATHS.media,
            styles: PATHS.styles,
            parts: PATHS.parts
        }
    },
    optimization: {
        splitChunks: {
            chunks: 'all',
        },
    },
    plugins:
        PAGES.map((page) =>
            new HtmlWebpackPlugin({
                template: PATHS.src + `/pages/${page}/${page}.pug`,
                filename: `${page}.html`,
                chunks: ['common', page],
                inject: 'body',
            })
        )
        .concat([
            new MiniCssExtractPlugin({
                filename: 'styles/[name].css',
                chunkFilename: 'styles/[id].css',
            })
        ])
};