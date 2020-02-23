require('dotenv').config();

const env = process.env;

const MONGO_DB_USER = env.MONGO_DB_USER;
const MONGO_DB_PASS = env.MONGO_DB_PASS;
const MONGO_DB_NAME = env.MONGO_DB_NAME;
const MONGO_DB_HOST = env.MONGO_DB_HOST;

const PORT = env.PORT;

const MONGOOSE_URL = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_DB_HOST}/${MONGO_DB_NAME}`;

module.exports = {
    MONGOOSE_URL : MONGOOSE_URL,
    PORT: PORT
};
