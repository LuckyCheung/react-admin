import axios from "axios";

const http = axios.create({
  timeout: 30000,
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
  },
});

http.interceptors.request.use(
  (req) => {
    const token = localStorage.getItem["token"];
    token && (req.headers.Authorization = token);
    return req;
  },
  (err) => {
    return Promise.reject({
      err,
      msg: handleError(),
    });
  }
);

http.interceptors.response.use(
  (res) => {
    return res.status === 200
      ? Promise.resolve({
          res,
          msg: handleError(res.status),
        })
      : Promise.reject({
          res,
          msg: handleError(res.status),
        });
  },
  (err) => {
    return Promise.reject({
      err,
      msg: handleError(),
    });
  }
);

const httpCode = {
  200: "请求成功",
  400: "请求参数错误",
  401: "权限不足, 请重新登录",
  403: "服务器拒绝本次访问",
  404: "请求资源未找到",
  405: "请求失败",
  500: "内部服务器错误",
  501: "服务器不支持该请求中使用的方法",
  502: "网关错误",
  504: "网关超时",
  505: "网络不稳定，请稍后再试",
};

function handleError(errCode = 100) {
  if (!window.navigator.onLine) {
    errCode = 505;
  }
  if (errCode in httpCode) {
    return httpCode[errCode];
  }
}

export default http;
