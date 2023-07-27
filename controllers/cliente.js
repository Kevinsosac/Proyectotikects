import Cliente from "../models/cliente.js";
const httpcliente = {
    getcliente: async (req, res) => {
        try {
            const cliente = await Cliente.find()
            res.json({ cliente })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getclienteCedula: async (req, res) => {
        const { cedula } = req.params
        try {
            const cliente = await Cliente.find({cedula})
            res.json({ cliente })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postAgregarcliente: async (req,res) =>{
        try {
            const {nombre, cedula, apellido, telefono, edad} = req.body
            const cliente = new Cliente ({nombre, cedula, apellido, telefono, edad})
            await cliente.save()
            res.json({cliente})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putEditarcliente: async(req, res) => {
        const {id} = req.params
        const {nombre, telefono} = req.body
        const cliente = await Cliente.findByIdAndUpdate(id,{nombre,telefono},{new:true});
        res.json({cliente})
    },
    deletecliente: async(req, res) => {
        const {cedula}=req.params
        const cliente = await Cliente.findOneAndDelete({cedula}) 
        res.json({cliente})
    }
}
export default httpcliente