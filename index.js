const express = require("express");
const cors = require("cors");
const coursesRouter = require("./routes/courses");
const eventsRouter = require("./routes/events");
const teamRouter = require("./routes/team");
const postsRouter = require("./routes/posts");
const jobsRouter = require("./routes/jobs");

const app = express();

app.use(express.json());
app.use(cors({ origin: "*" }));

// app.use("/", (req, res) => res.json(data));
app.use("/courses", coursesRouter);
app.use("/events", eventsRouter);
app.use("/team", teamRouter);
app.use("/posts", postsRouter);
app.use("/jobs", jobsRouter);

app.listen(3000, () => console.log("API is Ready!"));
