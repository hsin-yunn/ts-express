import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import cors from "cors";

// import indexRouter from "routes/index";
// import usersRouter from "routes/users";

const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// app.use("/", indexRouter);
// app.use("/users", usersRouter);
const apple = 123;
console.log(`server is running ${apple}`);

export default app;
