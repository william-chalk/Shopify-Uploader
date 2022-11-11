const router = require("express").Router();
const userRoutes = require("./user-routes");
const { UserController } = require("../../controllers");

const auth = require("../../middleware/auth");

router.use("/users", userRoutes);

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.post("/logout", auth, UserController.logout);

module.exports = router;
