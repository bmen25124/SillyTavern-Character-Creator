const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    entry: path.join(__dirname, 'src/index.tsx'),
    output: {
        path: path.join(__dirname, 'dist/'),
        filename: 'index.js',
        library: {
            type: 'module'
        }
    },
    experiments: {
        outputModule: true
    },
    externalsType: 'module',
    externals: [
        function({ context, request }, callback) {
            if (request.includes('../../..')) {
                // Return the path as an external module import
                return callback(null, `module ${request}`);
            }
            // Continue without externalizing the import
            callback();
        },
    ],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        extensionAlias: {
            '.js': ['.ts', '.js', '.tsx', '.jsx'],
            '.cjs': ['.cts', '.cjs', '.tsx', '.jsx'],
            '.mjs': ['.mts', '.mjs', '.tsx', '.jsx'],
        }
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'source-map',
    module: {
        rules: [
            {
                test: /\.(ts|tsx|js|jsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            cacheDirectory: true,
                            presets: [
                                '@babel/preset-env',
                                ['@babel/preset-react', { runtime: 'automatic' }],
                                '@babel/preset-typescript',
                            ],
                        },
                    },
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: process.env.NODE_ENV !== 'production',
                        },
                    },
                ],
            },
        ],
    },
    optimization: {
        minimize: process.env.NODE_ENV === 'production',
        minimizer: [new TerserPlugin({
            extractComments: false,
        })],
    },
}
