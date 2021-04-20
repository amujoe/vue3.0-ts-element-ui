import http from "@/plugins/axios";
// const http = Vue.axios;
const apis = {
  // 所有模块接口
  GetModules(data: any) {
    return http("project", {
      method: "GET",
      params: data,
    });
  },
  // 添加模块
  AddModules(data: any) {
    return http("project", {
      method: "POST",
      data,
    });
  },
  // 模块详情
  ModulesDetail(data: any) {
    return http(`project/info/${data.key}`, {
      method: "GET",
      params: data,
    });
  },
  // 编辑模块
  EditModules(data: any) {
    return http(`project/info/${data.key}`, {
      method: "PUT",
      data,
    });
  },
  // 删除模块
  DeleteModules(data: any) {
    return http(`project/info/${data.key}`, {
      method: "DELETE",
    });
  },
};
export default apis;
