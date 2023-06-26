module.exports = {
  assetsDir: 'static',
  parallel: false,
  publicPath: './',
  devServer:{
    open: true,     //设置自动启动浏览器
    // host: '192.168.101.48',
    host:'192.168.2.101',
    port: 8080,
    proxy:{
      '/api':{
       //target:'http://192.168.2.254:8090',
        target:'http://192.168.2.106:9006',
         //target:'http://121.37.188.23:8088',
        ws:true,
        changeOrigin: true, //允许跨域
        pathRewrite:{
          '^/api':''
        }
      }
    }
  }
}
