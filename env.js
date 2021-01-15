// .env.js 文件
// 不同环境访问不同的路径
const ENV_API_URL = {
  development: 'https://uniwork.weiyoho.com/addons/recruit/', //开发环境
  production: 'https://uniwork.weiyoho.com/addons/recruit/', //生产环境
}
const ENV_BASE_URL = {
  development: 'https://uniwork.weiyoho.com/', //开发环境
  production: 'https://uniwork.weiyoho.com/', //生产环境
}

export const API_URL = ENV_API_URL[process.env.NODE_ENV || 'development']; //后台接口域名
export const BASE_URL = ENV_BASE_URL[process.env.NODE_ENV || 'development']; //后台根域名
export const HAS_LIVE = false; //后台是否开通直播权限,根据情况在manifest.json中，开启注释相应组件的引入。