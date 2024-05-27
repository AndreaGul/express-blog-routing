const express = require("express");
const router = express.Router();
const postsController = require("../controllers/posts");


router.get("/", postsController.index);


module.exports = router;