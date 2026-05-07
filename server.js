 const RED = require('node-red');
const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: ".",
    flowFile: "flows.json",
    credentialSecret: "mi-secreto-personal"
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const PORT = process.env.PORT || 1880;

server.listen(PORT, () => {
    console.log(`✅ Node-RED corriendo en el puerto ${PORT}`);
    console.log(`📊 Dashboard: http://localhost:${PORT}/ui`);
});

RED.start(); 