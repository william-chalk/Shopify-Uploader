const router = require("express").Router();
const { PageController } = require("../controllers/index");

const auth = require("../middleware/auth");
const dashboardRoutes = require("./dashboard-routes");
const homeRoutes = require('./home-routes');
const apiRoutes = require("./api");

// Static pages
router.get("/register", (req, res) => res.render("register"));
router.get("/login", (req, res) => res.render("login"));

// Pages with data
router.use("/", homeRoutes);
router.use("/create-template", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
  