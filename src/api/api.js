import http from "./http";
import urlConfig from "./url";

function GET(url, params) {
  return new Promise((resolve, reject) => {
    http
      .get(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function POST(url, params) {
  return new Promise((resolve, reject) => {
    http
      .post(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function PUT(url, params) {
  return new Promise((resolve, reject) => {
    http
      .put(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

function DEL(url, params) {
  return new Promise((resolve, reject) => {
    http
      .delete(url, params)
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

export default {
  login: (p) => POST(`${urlConfig.public}/login`, p),
  getMenu: () => GET(`${urlConfig.user}/user`),
};
