const express = require("express");
const app = express();
const sanitizer = require("perfect-express-sanitizer");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const blogRoutes = require("./routes/blogRoutes");
const authRoutes = require("./routes/authRoutes");

// cors options object
const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true
};

app.use(cors(corsOptions));
// configuration for sending json data on our application
app.use(express.json());
app.use(cookieParser());

app.use("/users", userRoutes);
app.use("/blogs", blogRoutes);
app.use("/auth", authRoutes);

app.use(
  sanitizer.clean({
    xss: true,
    noSql: true,
    sql: true,
  })
);

module.exports = app;
