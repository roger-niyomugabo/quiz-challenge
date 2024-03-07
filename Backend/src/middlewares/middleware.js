/**
 * Middleware to validate a request with the schemaValidator.
 * @param {Joi.ObjectSchema} schemaValidator Joi schema validator object
 * @returns {Function} Middleware function
 */
export const validate = (schemaValidator) => {
  return function (req, res, next) {
    const { error, value } = schemaValidator.validate(req.body, { abortEarly: false, stripUnknown: true });

    if (error) {
      const customErrors = error.details.map((err) => {
        return {
          message: err.message,
          param: err.context.label,
          value: err.context.value
        };
      });
      return res.status(422).json({
        title: 'invalid data in request body',
        errors: customErrors
      });
    }

    req.body = value;
    next();
  };
};
