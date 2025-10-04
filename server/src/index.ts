import express from "express"
import dotenv from "dotenv"
dotenv.config();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
})