const router = require("express").Router();
const userRoutes = require("./user-routes");
const { UserController } = require("../../controllers");

const withAuth = require("../../middleware/auth");

router.use("/users", userRoutes);

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", withAuth, UserController.logout);

module.exports = router;
