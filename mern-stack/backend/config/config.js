const env = process.env.NODE_ENV || "development";

const config = require("./config.json");
const envConfig = config[env];

if (envConfig) {
  console.log(envConfig);

  Object.keys(envConfig).forEach((key) => {
    process.env[key] = envConfig[key];
  });
}
