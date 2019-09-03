/*eslint-disable */

const path = require( 'path' );
const BrowserSyncPlugin = require( 'browser-sync-webpack-plugin' );
const CleanWebpackPlugin = require( 'clean-webpack-plugin' );
const MiniCssExtractPlugin = require( 'mini-css-extract-plugin' );
const TerserPlugin = require( 'terser-webpack-plugin' );
const marked = require( 'marked' );

// Checks for env mode.
const isProduction  = process.env.NODE_ENV === 'production';
const isDevelopment = ! isProduction;

// Project paths.
const root = path.resolve( __dirname );
const entry = `${root}/assets/js/app.js`;
const output = `${root}/dist`;

// All loaders to use on assets.
const allModules = {
    rules: [
        {
            enforce: 'pre',
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc.json',
                    fix: false,
                    failOnWarning: false,
                    failonError: true
                }
            }
        },
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {

                    // Do not use the .babelrc configuration file.
                    babelrc: false,

                    // The loader will cache the results of the loader in node_modules/.cache/babel-loader.
                    cacheDirectory: true,

                    // Enable latest JavaScript features.
                    presets: [ '@babel/preset-env' ],

                    // Enable dynamic imports.
                    plugins: [ '@babel/plugin-syntax-dynamic-import' ]
                }
            }
        },
        {
            test: /\.(scss|css)$/,
            use: [
                MiniCssExtractPlugin.loader,
                {
                    loader: 'css-loader',
                    options: {
                        sourceMap: true
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
            test: /\.md$/,
            use: [
                {
                    loader: "html-loader"
                },
                {
                    loader: "markdown-loader",
                    options: {
                        pedantic: false,
                        renderer: new marked.Renderer()
                    }
                }
            ]
        }
    ]
};

// All optimizations to use.
const allOptimizations = {
    runtimeChunk: false,
    splitChunks: {
        cacheGroups: {
            vendor: {
                test: /[\\/]node_modules[\\/]/,
                name: 'vendor',
                chunks: 'all'
            }
        }
    }
};

// Holds plugins to use.
const plugins = [

    // Convert JS to CSS.
    new MiniCssExtractPlugin({
        filename: '[name].css'
    })
];

if ( isDevelopment ) {
    const BSConfig = {
        open: false,
        port: 3000,
        files: [
            './dist/*.css',
            './dist/*.js',
            './index.html',
            'components/**/*.html'
        ],
        server: true
    };
    const BSOptions = {
        injectCss: true,
        reload: true
    };

    plugins.push( new BrowserSyncPlugin( BSConfig, BSOptions ) );
}

// Use only for production build.
if ( isProduction ) {
    allOptimizations.minimizer = [

        // Optimize for production build.
        new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            terserOptions: {
                output: {
                    comments: false
                },
                compress: {
                    warnings: false,
                    drop_console: true // eslint-disable-line camelcase
                }
            }
        })
    ];

    // Delete distribution folder for production build.
    plugins.push( new CleanWebpackPlugin() );
}

module.exports = [
    {
        entry: {
            app: [ entry ]
        },

        output: {
            path: output,
            filename: '[name].js'
        },

        module: allModules,

        optimization: allOptimizations,

        plugins: plugins,

        // Disable source maps for production build.
        devtool: isProduction ? '' : 'inline-source-map',
    }
];
