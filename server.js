const path = require("path");

const helpers = require("./middleware/auth");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");

const session = require("express-session");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

const app = express();
const PORT = process.env.PORT || 3001;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sess));

app.use(routes);
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Now Listening"));
});
