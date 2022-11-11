const router = require("express").Router();
const { PageController } = require("../controllers/index");

const auth = require("../middleware/auth");
const dashboardRoutes = require("./dashboard-routes");
const apiRoutes = require("./api");

// Static pages
router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));

// Pages with data
router.get("/", PageController.getDashboard);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
  