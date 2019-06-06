// vue.config.js
module.exports = {
    devServer: {
        port: 8012,
        // host:'0.0.0.0',
        proxy: {
            '/apis': {
                target: 'http://www.lvchengyi.club:8011/',  // target host
                // ws: true,
                changeOrigin: true,  // needed for virtual hosted sites
                pathRewrite: {
                    '^/apis': ''  // rewrite path
                }
            },
        }
    }
};
