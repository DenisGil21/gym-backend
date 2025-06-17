import Server from "./models/server";
process.loadEnvFile();
const server = new Server();

server.listen();