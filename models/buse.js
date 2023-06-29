import mongoose from "mongoose";

const Buse = new mongoose.Schema(
    {
        conductore: {type:mongoose.Schema.Types.ObjectId, ref:'conductore', require:true},
        placa: {type:String, require:true},
        numbus: {type:String, require:true},
        estadobus: {type:String, require:true},
        createAd: {type:Date, default:Date.now},
        estado: {type:String, default:"1"},

    }
)

export default mongoose.model("buse", Buse)