import {config} from "dotenv";

config();

const env = process.env;

const MONGO_DB_USER: string = env.MONGO_DB_USER;
const MONGO_DB_PASS: string = env.MONGO_DB_PASS;
const MONGO_DB_NAME: string = env.MONGO_DB_NAME;
const MONGO_DB_HOST: string = env.MONGO_DB_HOST;

const PORT: number = Number(env.PORT);

const MONGOOSE_URL: string = `mongodb://${MONGO_DB_USER}:${MONGO_DB_PASS}@${MONGO_DB_HOST}/${MONGO_DB_NAME}`;

export const settings = {
    MONGOOSE_URL: MONGOOSE_URL,
    PORT: PORT
};
