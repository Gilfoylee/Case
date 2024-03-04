/**
 * Create success response.
 * 
 * @param {Object}      res
 * @param {string}      msg
 * 
 * @returns {Object}
 */
exports.successResponse = function (res, msg) {
	var data = {
		status: 1,
		message: msg
	};
	return res.status(200).json(data);
};

/**
 * Create successResponseWithData response.
 * 
 * @param {Object}      res
 * @param {string}      msg
 * @param {Object}      data
 * 
 * @returns {Object}
 */
exports.successResponseWithData = function (res, msg, data) {
	var resData = {
		status: 1,
		message: msg,
		data: data
	};
	return res.status(200).json(resData);
};

/**
 * Create error response.
 * 
 * @param {Object}      res
 * @param {string}      msg
 * 
 * @returns {Object}
 */
exports.ErrorResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(500).json(data);
};

/**
 * Create notFound response.
 * 
 * @param {Object}      res
 * @param {string}      msg
 * 
 * @returns {Object}
 */
exports.notFoundResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(404).json(data);
};

/**
 * Create validationErrorWithData response.
 * 
 * @param {Object}      res
 * @param {string}      msg
 * @param {Object}      data
 * 
 * @returns {Object}
 */
exports.validationErrorWithData = function (res, msg, data) {
	var resData = {
		status: 0,
		message: msg,
		data: data
	};
	return res.status(400).json(resData);
};

/**
 * Create unauthorized response.
 * 
 * @param {Object}      res
 * @param {string}      msg
 * 
 * @returns {Object}
 */
exports.unauthorizedResponse = function (res, msg) {
	var data = {
		status: 0,
		message: msg,
	};
	return res.status(401).json(data);
};