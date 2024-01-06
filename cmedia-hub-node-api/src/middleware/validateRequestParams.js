// middleware.js
const APIResponse = require('./APIResponse');

const validateRequestParams = (allowedParams) => {
  return (req, res, next) => {
    const unwantedParams = Object.keys(req.query).filter(param => !allowedParams.includes(param));

    if (unwantedParams.length > 0) {
      const errorDetails = `Invalid query parameters: ${unwantedParams.map(param => `${param}=${req.query[param]}`).join(', ')}`;
      return res.status(400).json(APIResponse.error({
        status: 400,
        message: 'Bad Request',
        details: [errorDetails]
      }));
    }

    next();
  };
};

module.exports = { validateRequestParams };
