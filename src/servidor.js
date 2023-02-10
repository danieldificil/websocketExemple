import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";

const app = express()
const port = process.env.port || 3000

const routeListen = url.fileURLToPath(import.meta.url)
const publicFolder = path.join(routeListen, "../..", "public");
app.use(express.static(publicFolder))

const httpServer = http.createServer(app)

httpServer.listen(port, () => console.log(`Server listen on gate ${port}`))

const io = new Server(httpServer)
export default io;
