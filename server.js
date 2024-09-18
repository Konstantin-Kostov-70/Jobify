import express from "express";
import morgan from "morgan";
import * as dotenv from "dotenv";
import { nanoid } from "nanoid";

//ROUTERS
import jobRouter from './routes/jobRouter.js'

dotenv.config();
const app = express();


if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());

//TEST ROUTS

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use('/api/v1/jobs', jobRouter);

app.use('*', (req, res) => {
  res.status(404).json({msg: 'not found'})
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({msg: 'something went wrong'})
});


const port = process.env.PORT || 5100;
app.listen(port, () => {
  console.log(`server working in PORT ${port}`);
});
