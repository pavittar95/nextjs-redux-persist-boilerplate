// const withCSS = require('@zeit/next-css')
// const withSCSS = require('@zeit/next-sass')

// module.exports = withSCSS({
//   cssLoaderOptions: {
//     url: false
//   }
// });
// // const path = require('path')

// // module.exports = {
// //   sassOptions: {
// //     includePaths: [path.join(__dirname, 'styles')],
// //   },
// // }

const withSass = require('@zeit/next-sass');
const withCSS = require("@zeit/next-css");
module.exports = withCSS(withSass({
webpack (config, options) {
   config.module.rules.push({
       test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
       use: {
           loader: 'url-loader',
           options: {
               limit: 100000
           }
       }
   });

    return config;
    }
  }));