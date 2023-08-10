import mongoose from "mongoose";

const tikect = new mongoose.Schema(
    {
        origen: {type:String, require:true},
        destino: {type:mongoose.Schema.Types.ObjectId, ref:'Destino', require:true},
        precio: {type:Number, require:true},
        buse: {type:mongoose.Schema.Types.ObjectId, ref:'Buse', require:true},
        cliente: {type:mongoose.Schema.Types.ObjectId, ref:'Cliente', require:true},
        conductor: {type:mongoose.Schema.Types.ObjectId, ref:'conductore', require:true},
        vendedor: {type:mongoose.Schema.Types.ObjectId, ref:'Vendedor', require:true},
        fechacreacion: {type:Date, default:Date.now},
    }
)

export default mongoose.model("tikect", tikect)