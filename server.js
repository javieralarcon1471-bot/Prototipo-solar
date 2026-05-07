const http = require('http');
const express = require('express');
const RED = require('node-red');

const app = express();
const server = http.createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: "./",
    flowFile: "flows.json",
    credentialSecret: "un-secreto-cualquiera",
    adminAuth: null,
    ui: { path: "ui" },
    httpStatic: null
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const PORT = process.env.PORT || 1880;

server.listen(PORT, () => {
    console.log(`✅ Node-RED corriendo en puerto ${PORT}`);
    console.log(`📊 Editor: https://prototipo-solar.onrender.com/`);
    console.log(`📊 Dashboard: https://prototipo-solar.onrender.com/ui`);
});

RED.start();
