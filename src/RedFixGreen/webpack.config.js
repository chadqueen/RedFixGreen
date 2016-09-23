module.exports = {
    entry: {
        'polyfills': './redFixGreenApp/polyfills.ts',
        'vendor': './redFixGreenApp/vendor.ts',
        'app': './redFixGreenApp/main.ts' // angular app
    },
    output: {
        path: './wwwroot/build',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.html']
    },
    module: {
        loaders: [
            {
                test: /\.ts$/,
                loader: 'ts',
                query: {
                    'ignoreDiagnostics': [
                        2403, // 2403 -> Subsequent variable declarations
                        2300, // 2300 -> Duplicate identifier
                        2374, // 2374 -> Duplicate number index signature
                        2375, // 2375 -> Duplicate string index signature
                        2502 // 2502 -> Referenced directly or indirectly
                    ]
                },
                exclude: [/node_modules\/(?!(ng2-.+))/]
            },
            {
                test: /\.html$/,
                loader: 'raw'
            }
        ]
    }
};