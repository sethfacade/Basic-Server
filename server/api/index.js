const router = require("express").Router();

// Write your routes to specifc pages here //
// Example //
// router.use('/users', require('./users'));  matches all requests to /api/users/
// router.use('/puppies', require('./puppies')); matches all requests to  /api/puppies/
// router.use('/kittens', require('./kittens'));  matches all requests to  /api/kittens/
router.use("/posts", require("./posts"));

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
