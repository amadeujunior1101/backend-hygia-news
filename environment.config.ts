import dotenv from "dotenv";

dotenv.config();

export default {
    URL_MONGO_LOCAL: process.env.URL_MONGO_LOCAL ?? '',
    URL_MONGO: process.env.URL_MONGO ?? '',
    SECRET_APP: process.env.SECRET_APP ?? '',
    confPort: process.env.PORT ?? ''
}