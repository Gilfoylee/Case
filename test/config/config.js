//During the automated test the env variable, We will set it to "test"
process.env.NODE_ENV = "test";
process.env.MONGODB_URL = "mongodb://localhost:27017";

//Require the dev-dependencies
const chai = require("chai");
const chaiHttp = require("chai-http");
const server = require("../../server");
let should = chai.should();
chai.use(chaiHttp);

//Export this to use in multiple files
module.exports = {
	chai: chai,
	server: server,
	should: should
};