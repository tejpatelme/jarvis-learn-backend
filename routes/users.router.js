const { Router } = require("express");
const { signUpUser, logInUser } = require("../controllers/users.controller");
const {
  validateEmail,
  validatePassword,
  checkValidationErrors,
} = require("../middlewares/auth");

const router = Router();

router
  .route("/signup")
  .post(validateEmail, validatePassword, checkValidationErrors, signUpUser);

router
  .route("/login")
  .post(validateEmail, validatePassword, checkValidationErrors, logInUser);

module.exports = router;
