import mongoose from "mongoose";

const conductore = new mongoose.Schema(
    {
        nombre: {type:String, require:true},
        cedula: {type:String, require:true},
        apellido: {type:String, require:true},
        telefono: {type:String, require:true},
        edad: {type:String, require:true},
        rutas: {type:String, require:true},
        estado: {type:String, default:"1"},
        createAd: {type:Date, default:Date.now},

    }
)

export default mongoose.model("conductore", conductore)