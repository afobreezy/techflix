const http = require("http");
const app = require("./app");
const httpServer = http.createServer(app);
const envVariables = require("./constants/index");

const { PORT } = envVariables;

const startServer = async () => {

  httpServer.listen(PORT, () => {
    console.log(`server is running on port: ${PORT}`);
  });
};

startServer();
