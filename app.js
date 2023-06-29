import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import buse from "./routes/buse.js";
const app = express();
app.use(express.json());
app.use(   "/buse", buse)

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.Mongo_db)
    .then(() => console.log('Connected!'));
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
