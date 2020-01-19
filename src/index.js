const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');
const routes = require('./routes');
const {setupWebsocket} = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

<<<<<<< HEAD
mongoose.connect('mongodb+srv://adrielradicchi:octable88.@mongodbdev-bk1k8.mongodb.net/test?retryWrites=true&w=majority',{
=======
mongoose.connect('mongodb+srv://<username>:<password>@mongodbdev-bk1k8.mongodb.net/test?retryWrites=true&w=majority',{
>>>>>>> master
    useNewUrlParser: true, 
    useUnifiedTopology : true,
    useFindAndModify: false,
    useCreateIndex: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);
