import conductore from "../models/conductore.js";
const httpconductor = {
    getconductor: async(req, res) => {
        try {
            const conductor = await conductore.find()
        res.json(conductor);
        } catch (error) {
            res.status(400).json({error})
        }
        
    },
    getconductorcedula: async(req, res) => {
        try {
            const conductor = await conductore.find({cedula:cedula})
            res.json({conductor})
        } catch (error) {
            res.status(400).json({error})
        }
    },
    postAgregarconductor: async(req, res) => {
        try {
            const { nombre, cedula, apellido, telefono, edad, rutas} = req.body
            const conductor = new conductor({nombre, cedula, apellido, telefono, edad, rutas})
            await conductor.save()
            res.json(conductor) 
        } catch (error) {
            res.status(400).json({error})
        }
    },
    putEditarconductor:async(req, res) => {
        try {
            const {id} = req.params
        const {nombre, telefono} = req.body
        const conductor = await conductore.findByIdAndUpdate(id, {nombre, telefono}, {new:true})
        res.json({conductor})
        } catch (error) {
            res.status(400).json({error})
        }
        
    },
    deleteconductor:async(req, res) => {
        try {
            const {cedula} = req.params
        const conductor = await conductore.findByIdAndDelete({cedula:cedula})
        res.json(conductor)
        } catch (error) {
            res.status(400).json({error})
        }
        
    },
    }
export default httpconductor