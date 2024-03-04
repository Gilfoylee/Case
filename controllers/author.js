const Author = require('../models/author')
const apiResponse = require("../helpers/apiResponse");

/**
 * Retrieve author from mongodb.
 *
 * @param {Object}      req
 *
 * @returns {Object}
 */
async function getAuthor(req) {
    try {
        return await Author.findById(req.params.id);
    } catch (error) {
        return null;
    }
}

/**
 * Build author model.
 *
 * @param {Object}      req
 *
 * @returns {Object}
 */
function buildAuthorModel(req) {
    return new Author({
        name: req.body.name,
        country: req.body.country,
        birthDate: req.body.birthDate
    });
}

/**
 * Build author patch model.
 *
 * @param {Object}      req
 * @param {Object}      author
 *
 * @returns {Object}
 */
function buildAuthorPatchModel(req, author) {
    if (req.body.name != null) {
        author.name = req.body.name;
    }
    if (req.body.country != null) {
        author.country = req.body.country;
    }
    if (req.body.birthDate != null) {
        author.birthDate = req.body.birthDate;
    }

    return author;
}

/**
 * Get all authors.
 *
 * @returns {Object}
 */
exports.authorList = [
    async function (req, res) {
        try {
            const authors = await Author.find();

            return apiResponse.successResponseWithData(res, "Operation success", authors);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Authors cannot retrieved");
        }
    }
];

/**
 * Get single author by id.
 *
 * @param {string}      id
 *
 * @returns {Object}
 */
exports.authorDetail = [
    async function (req, res) {
        try {
            const author = await getAuthor(req);
            if (author == null) {
                return apiResponse.notFoundResponse(res, "Author not found");
            }

            return apiResponse.successResponseWithData(res, "Operation success", author);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Author cannot retrieved");
        }
    }
];

/**
 * Delete author by id.
 *
 * @param {string}      id
 *
 * @returns {Object}
 */
exports.deleteAuthor = [
    async function (req, res) {
        try {
            const author = await getAuthor(req);
            if (author == null) {
                return apiResponse.notFoundResponse(res, "Author not found");
            }

            await author.remove()
            return apiResponse.successResponseWithData(res, "Operation success", author);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Author cannot be deleted");
        }
    }
];

/**
 * Create author.
 *
 * @param {string}      name
 * @param {string}      country
 * @param {Date}      birthDate
 * 
 * @returns {Object}
 */
exports.createAuthor = [
    async function (req, res) {
        try {
            const author = buildAuthorModel(req);
            const newAuthor = await author.save()
            return apiResponse.successResponseWithData(res, "Operation success", newAuthor);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Author cannot be created");
        }
    }
];

/**
 * Update author.
 *
 * @param {string}      id
 * @param {string}      name
 * @param {string}      country
 * @param {Date}      birthDate
 * 
 * @returns {Object}
 */
exports.updateAuthor = [
    async function (req, res) {
        try {
            const author = await getAuthor(req)
            if (author == null) {
                return apiResponse.notFoundResponse(res, "Author not found");
            }

            tempAuthor = buildAuthorPatchModel(req, author);
            const updatedAuthor = await tempAuthor.save()
            return apiResponse.successResponseWithData(res, "Operation success", updatedAuthor);
        } catch (err) {
            return apiResponse.ErrorResponse(res, "Author cannot be updated");
        }
    }
];