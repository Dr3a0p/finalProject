const express = require('express');

const { ApolloServer } = require('apollo-server-express');


const { typeDefs, resolvers } = require('./schemas');
const { startApolloServer } = require('./startApolloServer');
const db = require('./connection').default;
exports.db = db;

const PORT = process.env.PORT || 3001;
exports.PORT = PORT;
const server = new ApolloServer({
  typeDefs,
  resolvers
});
exports.server = server;

const app = express();
exports.app = app;

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Call the async function to start the server
startApolloServer();
