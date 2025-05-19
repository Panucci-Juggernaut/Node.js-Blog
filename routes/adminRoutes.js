const express = require("express");
const router = express.Router();
const {
  getAdminLoginPage,
  loginAdmin,
  getAdminDashboardPage,
  getAdminCreatePage,
  createPost,
  getAdminEditPage,
  editPost,
  registerAdmin,
  deletePost,
  logoutAdmin,
} = require("../controllers/adminController");
const requireAuth = require("../middleware/requireAuth");

// get admin login page
router.get("/admin", getAdminLoginPage);

// login an admin
router.post("/admin", loginAdmin);

// register a new admin
router.post("/register", registerAdmin);

// logout an admin
router.get("/logout", logoutAdmin);

// get admin dashboard page
router.get("/dashboard", requireAuth, getAdminDashboardPage);

// get admin create page
router.get("/add-post", requireAuth, getAdminCreatePage);

// create a new post
router.post("/add-post", requireAuth, createPost);

// get admin edit page
router.get("/edit-post/:id", requireAuth, getAdminEditPage);

// edit a post
router.put("/edit-post/:id", requireAuth, editPost);

// delete a post
router.delete("/delete-post/:id", requireAuth, deletePost);

module.exports = router;
