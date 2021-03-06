const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

const server = express();

// LOCALHOST
// mongoose.connect('mongodb://127.0.0.1:27017/UniProjeta', {
// 	useNewUrlParser: true
// });

// DEPLOY
mongoose.connect('mongodb+srv://matheus:matheus@cluster0-f1deu.mongodb.net/UniProjeta?retryWrites=true&w=majority', {
	useNewUrlParser: true
});

// DEPLOY
server.use(express.static(path.join(__dirname, '..', 'build')));

server.use(cors());
server.use(express.json());
server.use(routes);

// DEPLOY
server.listen(process.env.PORT || '3000');
// LOCALHOST
// server.listen('3333');