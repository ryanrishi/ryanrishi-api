require('dotenv').config();

module.exports = {
  databasePort: process.env.DATABASE_PORT,
  databaseHost: process.env.DATABASE_HOST,
  databaseName: process.env.DATABASE_NAME,
  databaseUser: process.env.DATABASE_USER,
  databaseAccessKey: process.env.DATABASE_ACCESS_KEY,
  databasePoolMin: process.env.DATABASE_POOL_MIN,
  databasePoolMax: process.env.DATABASE_POOL_MAX,
  env: process.env.NODE_ENV
};
