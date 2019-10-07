const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const path = require('path');
const cors = require('cors');

const server = express();

mongoose.connect('mongodb://127.0.0.1:27017/UniProjeta', {
	useNewUrlParser: true
});

// mongoose.connect('mongodb+srv://matheus:@cluster0-f1deu.mongodb.net/admin?retryWrites=true&w=majority', {
// 	useNewUrlParser: true
// });

server.use(express.static(path.join(__dirname, '..', 'build')));

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(process.env.PORT || '3000');