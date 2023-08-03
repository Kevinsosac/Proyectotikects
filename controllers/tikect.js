import tikect from "../models/tikect.js";
const httptikect = {
    gettikect: async (req, res) =>{
        try {
            const Tikect = await tikect.find()
            res.json({Tikect})
        } catch (error) {
            res.status(400).json({error})
        }
    },

    gettikectid: async (req, res) =>{
        try {
            const {id} = req.params
            const Tikect = await tikect.findById(id).populate("buse", ["placa", "numbus"]
            ).populate("destino", ["nombre"]
            ).populate("cliente", ["nombre", "telefono"]
            ).populate("conductor", ["nombre", "telefono"]
            ).populate("vendedor", ["nombre", "telefono"])
            res.json({Tikect})
        } catch (error) {
            res.status(400).json({error})
        }
    },

    postAgregartikect: async (req, res) =>{
        try {
            const {origen, destino, precio, buse, cliente, conductor,vendedor } = req.body
            const Tikect = new tikect({origen, destino, precio, buse, cliente, conductor,vendedor})
            await Tikect.save()

        
        } catch (error) {
            res.status(400).json({error})
        }
    },

    putEditartikect: async (req, res) =>{
        try {
            const {id} = req. params
            const {origen, destino} = req.body
            const Tikect = await tikect.findByIdAndUpdate(id, {origen, destino}, {new:true})
            res.json({Tikect})
        } catch (error) {
            res.status(400).json({error})
        }
    },

    deletetikect: async (req, res) =>{
        try {
            const {id} = req.params
            const Tikect = await tikect.findByIdAndDelete(id)
            res.json({Tikect})
        } catch (error) {
            res.status(400).json({error})
        }
    }


}
export default httptikect