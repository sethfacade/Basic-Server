const router = require("express").Router();
const axios = require("axios");
// GET POSTS FROM THE API //
router.get("/", async (req, res, next) => {
  try {
    const req = await axios.get("https://jsonplaceholder.typicode.com/posts");
    res.json(req.data);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
