import { Login } from "@/api/interface/index";
import { PORT1 } from "@/api/config/servicePort";
import qs from "qs";

import http from "@/api";

/**
 * @name 登录模块
 */
// * 用户登录接口
export const loginApi = (params: Login.ReqLoginForm) => {
	return new Promise((resolve, reject) => {
		const url: string = "/json/login.json";
		fetch(url)
			.then(resp => resp.json())
			.then(resp => {
				resolve(resp);
			})
			.catch(err => {
				reject(err);
			});
	});
	return http.post<Login.ResLogin>(PORT1 + `/login`, params);
	return http.post<Login.ResLogin>(PORT1 + `/login`, {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
	return http.post<Login.ResLogin>(PORT1 + `/login`, qs.stringify(params)); // post 请求携带 表单 参数  ==>  application/x-www-form-urlencoded
	return http.post<Login.ResLogin>(PORT1 + `/login`, params, { headers: { noLoading: true } }); // 控制当前请求不显示 loading
};

// * 获取按钮权限
export const getAuthorButtons = () => {
	return new Promise((resolve, reject) => {
		const url: string = "/json/buttons.json";
		fetch(url)
			.then(resp => resp.json())
			.then(resp => {
				resolve(resp);
			})
			.catch(err => {
				reject(err);
			});
	});
	return http.get<Login.ResAuthButtons>(PORT1 + `/auth/buttons`);
};

// * 获取菜单列表
export const getMenuList = () => {
	return new Promise((resolve, reject) => {
		const url: string = "/json/list.json";
		fetch(url)
			.then(resp => resp.json())
			.then(resp => {
				resolve(resp);
			})
			.catch(err => {
				reject(err);
			});
	});
	return http.get<Menu.MenuOptions[]>(PORT1 + `/menu/list`);
};
