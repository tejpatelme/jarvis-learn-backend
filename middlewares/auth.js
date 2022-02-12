const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const validator = require("validator");

const validateEmail = body("email").isEmail().withMessage("Email is invalid");

const validatePassword = body("password")
  .isStrongPassword()
  .withMessage(
    "Password should be minimum 8 character long, contain one uppercase letter, one number, and one special character"
  );

const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(401).json({
      success: false,
      error: errors.array(),
    });
  }
  next();
};

const verifyToken = (req, res, next) => {
  const token = req.headers.authorization;

  try {
    const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET);
    req.userId = decodedToken.userId;

    return next();
  } catch (err) {
    res
      .status(401)
      .json({ success: false, errorType: "JWT", errorMessage: err.message });
  }
};

//test

const emailValidation = (req, res, next) => {
  const { email } = req.body;
  const isEmail = validator.isEmail(email);
  if (!isEmail) {
    return res
      .status(401)
      .json({ success: false, errorMessage: "Email is invalid" });
  }

  next();
};

const passwordValidation = (req, res, next) => {
  const { password } = req.body;
  const isStrongPassword = validator.isStrongPassword(password);

  if (!isStrongPassword) {
    return res.status(401).json({
      success: false,
      errorMessage:
        "Password should be minimum 8 character long, contain one uppercase letter, one number, and one special character",
    });
  }

  next();
};

module.exports = {
  validateEmail,
  validatePassword,
  checkValidationErrors,
  verifyToken,
  emailValidation,
  passwordValidation,
};
