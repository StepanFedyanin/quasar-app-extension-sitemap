/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 */

const extendWithComponent = (conf, api) => {
  
  //const router = require(conf.build.sitemap)
  console.log(conf.build.sitemap)
  //console.log(conf,'conf')
}
export default function (api) {
  api.afterDev((api, { quasarConf }) => {
   console.log('fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff');
  })
  api.afterBuild((api, { quasarConf }) => {
    console.log(api,'api');
    console.log(quasarConf,'quasarConf');
  })
  // api.resolve.app('src/router/routes.js')
  // api.extendQuasarConf(extendWithComponent)
}
