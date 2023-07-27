import express from "express";
import mongoose from "mongoose";
import "dotenv/config"
import buse from "./routes/buse.js";
import cliente from "./routes/cliente.js";
import conductore from "./routes/conductore.js"
import destino from "./routes/destino.js"
import tikect from "./routes/tikect.js"
import vendedor from "./routes/vendedor.js";

const app = express();
app.use(express.json());
app.use(   "/buse", buse)
app.use(   "/cliente", cliente)
app.use(   "/conductore", conductore)
app.use(   "/destino", destino)
app.use(   "/tikect", tikect)
app.use(   "/vendedor", vendedor)

app.listen(process.env.PORT, () => {
    mongoose.connect(process.env.Mongo_db)
    .then(() => console.log('Connected!'));
    console.log(`Servidor escuchando en el puerto ${process.env.PORT}`);
});
