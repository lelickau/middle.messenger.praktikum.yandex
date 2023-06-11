const path = require('path')
const stylesHandler = 'style-loader'

module.exports = {
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        compress: true,
        open: true,
        host: 'localhost',
        port: 3000,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [stylesHandler, 'css-loader', 'sass-loader']
            }

        ]
    }
}
