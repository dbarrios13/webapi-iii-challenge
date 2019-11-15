const express = require('express')

const posts = require('./posts/postRouter')

const users = require('./users/userRouter')

const helmet = require('helmet')

const server = express();

server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('/posts', posts)

server.use('/users', users)

server.get('/', (req, res) => {
  res.send(`<h2>Let's write some middleware!</h2>`)
});

//custom middleware

function logger(req, res, next) {
  let now = Date()
  console.log(`A ${req.method} request to '${req.url}' on ${now}`)
  next()
};

module.exports = server;
