const config = {
  production: {
    url: process.env.DB_URL,
    dialect: "postgres",
  },
  test: {
    url: process.env.DB_URL,
    dialect: "postgres",
  },
  development: {
    url: process.env.DB_URL,
    dialect: "postgres",
  },
};

module.exports = config;
