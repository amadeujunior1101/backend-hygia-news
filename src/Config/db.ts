import mongoose from "mongoose";

import configEnv from "../../environment.config";

mongoose.Promise = global.Promise;

mongoose
  .connect(configEnv.URL_MONGO, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Mongo Conectado");
  })
  .catch((error) => {
    console.log("Houve um erro ao se conectar com o MongoDb" + error);
  });

export default mongoose;
