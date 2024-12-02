const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));

// importing router

const appRouter = require("./routes/appRouter");

// register view engine
app.set("view engine", "ejs");
app.use(express.static(__dirname));
// express application

app.listen(3000, () => {
  console.log("Express app is working");
});

app.use(appRouter);
