/* eslint-disable */

const path = require( 'path' );

// Check for production mode.
const isProduction = process.env.NODE_ENV === 'production';

// Self hosted fonts path.
const fontsPath = path.join( __dirname, 'assets/fonts' );

// All plugins to use.
const plugins = [

    // Add vendor prefixes to CSS rules.
    require( 'autoprefixer' )
];

// Use only for production build.
if ( isProduction ) {

    // Optimize and minify CSS.
    plugins.push(
        require( 'cssnano' )({
            preset: [
                'default',
                {
                    discardComments: {
                        removeAll: true
                    }
                }
            ]
        })
    );
}

module.exports = { plugins };
