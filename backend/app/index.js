const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");

const filmsRouter = require("./routes/films");
const peopleRouter = require("./routes/people");

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.send(`Server is up and running. ${new Date()}`);
});

app.use("/people", peopleRouter);
app.use("/films", filmsRouter);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
