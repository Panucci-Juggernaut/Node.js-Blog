const express = require("express");
const router = express.Router();
const {
  getHomePage,
  getPostPage,
  postSearch,
  getAboutPage,
  getContactPage,
} = require("../controllers/mainController");

// get the home page
router.get("/", getHomePage);
// get a single post
router.get("/post/:id", getPostPage);
// search for posts
router.post("/search", postSearch);
// get the about page
router.get("/about", getAboutPage);
// get the contact page
router.get("/contact", getContactPage);

module.exports = router;
