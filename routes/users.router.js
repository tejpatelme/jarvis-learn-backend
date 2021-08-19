const { Router } = require("express");
const {
  signUpUser,
  logInUser,
  getUserDetails,
} = require("../controllers/users.controller");
const {
  validateEmail,
  validatePassword,
  checkValidationErrors,
  verifyToken,
} = require("../middlewares/auth");

const router = Router();

router.route("/").get(verifyToken, getUserDetails);

router
  .route("/signup")
  .post(validateEmail, validatePassword, checkValidationErrors, signUpUser);

router
  .route("/login")
  .post(validateEmail, validatePassword, checkValidationErrors, logInUser);

module.exports = router;
