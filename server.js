const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const util = require("util");
const uuid = require("uuid");

const routes = require("./routes");


const html = require("./routes/html-routes");
const api = require("./routes/api");
const notes = require("./routes/api/notes");

const PORT = process.env.PORT || 3000;
//set uses for using express withen the app
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/", html);
app.use("/api", api);
app.use("/notes", notes);

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
