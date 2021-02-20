import express, { Application, Request, Response, NextFunction } from "express";

const app: Application = express();

const add = (a: number, b: number): number => a + b;

app.get("/", (req: Request, res: Response, next: NextFunction) => {
	console.log(add(3, 4));

	res.send("hi");
});

app.listen(5000, () => console.log("server is listening on port 5000"));
