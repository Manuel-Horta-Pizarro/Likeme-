const express = require("express");
const router = express.Router();
const { getPosts, addPost, updateLike, removePost } = require("../controller/postsController");

router.get("/posts", getPosts);
router.post("/posts", addPost);
router.put("/posts/:id", updateLike);
router.delete("/posts/:id", removePost);

module.exports = router;