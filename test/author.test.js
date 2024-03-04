const { chai, server, should } = require("./config/config");
const BookModel = require("../models/book");

/**
 * CASES ARE NOT WORKING PROPERLY
 * I HAD SOME PROBLEM ABOUT RUNNING TEST CASES ANDI DID NOT HAVE ENOUGH TIME TO SOLVE IT. FYI
 * Test cases to test all the author APIs
 * Covered Routes:
 * (1) Post author
 * (2) Get all authors
 * (3) Get single author
 * (4) Patch author
 * (5) Delete author
 */

describe("Book", () => {
	const testData = {
		"name": "Tugrul",
		"country": "Netherladns",
		"birthDate": "2024.03.03"
	};

	/*
	* Test the /POST route
	*/
	describe("/POST Author create", () => {
		it("It should send error for create author", (done) => {
			chai.request(server)
				.post("/authors")
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
		it("It should store author", (done) => {
			chai.request(server)
				.post("/authors")
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
	describe("/GET All authors", () => {
		it("it should GET all authors", (done) => {
			chai.request(server)
				.get("/authors")
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
	describe("/GET/:id author", () => {
		it("it should GET the author", (done) => {
			chai.request(server)
				.get("/authors/" + testData._id)
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
	describe("/PATCH/:id author", () => {
		it("it should PATCH the author", (done) => {
			chai.request(server)
				.put("/authors/" + testData._id)
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
	describe("/DELETE/:id author", () => {
		it("it should DELETE the author", (done) => {
			chai.request(server)
				.delete("/authors/" + testData._id)
				.end((err, res) => {
					res.should.have.status(200);
					res.body.should.have.property("message").eql("Operation success");
					done();
				});
		});
	});
});