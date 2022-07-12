import express, {Request, Response, json} from "express";
import dotenv from "dotenv"
import chalk from "chalk";

const app = express();
app.use(json());
dotenv.config();

app.get("/check/:id", (req: Request, res: Response) => {
    const {id} = req.params;
    console.log(id);
    res.send(`O id é ${id}`)
})

const port = +process.env.PORT || 4000

app.listen(port, () => (
    console.log(chalk.green(`Server is running on port ${port}`))
))