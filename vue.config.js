module.exports = {
    devServer: {
        proxy: {
            '/res':{
                target:'http://127.0.0.1:7001'
              },
            '/api': {
                target: 'http://127.0.0.1:7001'
            },
            '/static': {
                target: 'http://127.0.0.1:7001'
            }
        }
    },
    configureWebpack: require("./webpack.config"),
}