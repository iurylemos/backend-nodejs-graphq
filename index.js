//index.js
const { PubSub, withFilter, GraphQLServer } = require("graphql-yoga");
const mongoose = require("mongoose")
const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');
const model = require('./model');
const express = require('express');

const url = 'mongodb+srv://iury:iury1996@passaro-api-5sw91.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
  useCreateIndex: true
}).then(() => {
  console.log('Entrou aqui')
  // console.log(typeDefs)
  // console.log(resolvers)
  const pubsub = new PubSub();
  const server = new GraphQLServer({ typeDefs, resolvers, context: { pubsub } });
  // mongoose.connection.once("open", () => {
  // console.log('entrou aqui')
  server.start(() => console.log("We make magic over at localhost:4000"))
  // }
  // );
});

