import request from '@/util/request';

let prefix = 'http://localhost:4000';
const DEFAULT_MODE = 'development';
let otherConfig = {};
if (DEFAULT_MODE !== process.env.NODE_ENV) {
  prefix = '';
}
// 测试接口
export const getPageData = ({ page = 1 }) =>
  request(`${prefix}/v1/api/users?_page=${page}&_limit=5`);

// 登录
export const login = (opts: object) =>
  request(`${prefix}/v1/user/login`, {
    method: 'POST',
    body: JSON.stringify(opts),
  });
// 登录
export const register = (opts: object) =>
  request(`${prefix}/v1/user/register`, {
    method: 'POST',
    body: JSON.stringify(opts),
  });
// 获取验证码
export const getEmailCode = (opts: object) =>
  request(`${prefix}/v1/user/getEmailCode`, {
    method: 'POST',
    body: JSON.stringify(opts),
  });

//检测登录状态
export const checkLogin = () =>
  request(`${prefix}/api/checkLogin?t=${Date.now()}`);
