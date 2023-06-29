import mongoose, { now } from "mongoose";

const destino = new mongoose.Schema(
    {
        nombre: {type:String, required:true},
        horasalida: {type:Date, default:Date.now},
        horallegada: {type:Date, default:Date.now},
        createdAD: {type:Date, default:Date.now}
    }
)

export default mongoose.model("Destino", destino)