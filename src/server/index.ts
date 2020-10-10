import path from "path";
import express from "express";
import { sum } from "../core/math";

const app = express();

const buildDir = path.join(process.cwd() + "/build");
app.use(express.static(buildDir));

app.get("/ping", function (req, res) {
  return res.json({
	  val: sum(1, 3)
  });
});

const port = 3001;
app.listen(port, () => {
  console.log('');
  console.log('--------------');
  console.log(`localhost:${port}`);
  console.log('--------------');
});
