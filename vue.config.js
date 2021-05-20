module.exports = {
    devServer:{
        proxy:{
            "/api/banner":{
                target:'http://www.baidu.com'
            }
        }
    },
  configureWebpack: require("./webpack.config"),
}