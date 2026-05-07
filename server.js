const express = require('express');
const path = require('path');
const RED = require('node-red');

const app = express();
const server = require('http').createServer(app);

const settings = {
    httpAdminRoot: "/",
    httpNodeRoot: "/api",
    userDir: path.join(__dirname, 'data'),
    flowFile: path.join(__dirname, 'flows.json'),
    credentialSecret: "un-secreto",
    ui: { path: "ui" },
    httpStatic: path.join(__dirname, 'public'),
    functionGlobalContext: { }
};

RED.init(server, settings);
app.use(settings.httpAdminRoot, RED.httpAdmin);
app.use(settings.httpNodeRoot, RED.httpNode);

const PORT = process.env.PORT || 1880;

server.listen(PORT, () => {
    console.log(`✅ Node-RED corriendo en puerto ${PORT}`);
    console.log(`📊 Dashboard: https://tu-app.onrender.com/ui`);
});

RED.start();
