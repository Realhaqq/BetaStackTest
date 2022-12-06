const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.text());
server.use(cookieParser());
server.use(cors({ origin: true, credentials: true }));
server.use('/public', express.static('public'));


const todoRoutes = require('./src/routes/todo.route');
server.use('/api/v1/todo/', todoRoutes);

const port = 3001;

server.listen(port, (err) => {
  if (err) throw err;
  console.log(`BetaStack Server Ready on ${port}`);
});