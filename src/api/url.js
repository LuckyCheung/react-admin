const developmentUrl = {
  public: "xxx",
  user: "xxxx",
};

const productionUrl = {
  public: "aaa",
  user: "aaaa",
};

function getUrlConfig() {
  let config = {};
  switch (process.env.NODE_ENV) {
    case "development":
      config = developmentUrl;
      break;
    case "production":
      config = productionUrl;
      break;
    default:
      config = {};
  }
  return config;
}

export default getUrlConfig();
