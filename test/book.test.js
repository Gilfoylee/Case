const { chai, server, should } = require("./config/config");
const BookModel = require("../models/book");

/**
 * CASES ARE NOT WORKING PROPERLY
 * I HAD SOME PROBLEM ABOUT RUNNING TEST CASES ANDI DID NOT HAVE ENOUGH TIME TO SOLVE IT. FYI
 * Test cases to test all the book APIs
 * Covered Routes:
 * (1) Post book
 * (2) Get all books
 * (3) Get single book
 * (4) Patch book
 * (5) Delete book
 */

describe("Book", () => {
	const testData = {
		"title": "Four Agreements",
		"price": 10,
		"isbn": "isbn1",
		"language": "EN",
		"publisher": "M. Ruiz",
		"numberOfPages": 150,
		"author": "65e4783ab16b1e15c45f63a8"
	};

	/*
	* Test the /POST route
	*/
	describe("/POST Book create", () => {
		it("It should send error for create book", (done) => {
			chai.request(server)
				.post("/books")
				.send()
				.end((err, res) => {
					res.should.have.status(500);
					done();
				});
		});
	});

	/*
	* Test the /POST route
	*/
	describe("/POST Book Store", () => {
		it("It should store book", (done) => {
			chai.request(server)
				.post("/books")
				.send(testData)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation success");
					done();
				});
		});
	});

	/*
	* Test the /GET route
	*/
	describe("/GET All books", () => {
		it("it should GET all books", (done) => {
			chai.request(server)
				.get("/books")
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation success");
					testData._id = res.body.data[0]._id;
					done();
				});
		});
	});

	/*
	* Test the /GET/:id route
	*/
	describe("/GET/:id book", () => {
		it("it should GET the book", (done) => {
			chai.request(server)
				.get("/books/" + testData._id)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation success");
					done();
				});
		});
	});

	/*
	* Test the /PUT/:id route
	*/
	describe("/PATCH/:id book", () => {
		it("it should PATCH the book", (done) => {
			chai.request(server)
				.put("/books/" + testData._id)
				.send(testData)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation success");
					done();
				});
		});
	});

	/*
	* Test the /DELETE/:id route
	*/
	describe("/DELETE/:id book", () => {
		it("it should DELETE the book", (done) => {
			chai.request(server)
				.delete("/books/" + testData._id)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation success");
					done();
				});
		});
	});
});