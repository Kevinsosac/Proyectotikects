import mongoose from "mongoose"

const Cliente = new mongoose.Schema(
    {
        cedula: {type:String, require:true},
        nombre: {type:String, require:true},
        apellido: {type:String, require:true},
        telefono: {type:String, require:true},
        edad: {type:String, require:true},
        estado: {type:String, default:"1"},
        createAd: {type:Date, default:Date.now},
    }
)

export default mongoose.model("Cliente", Cliente)