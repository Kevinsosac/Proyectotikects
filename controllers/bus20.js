import bd from "../basedatos.js";
import buse from "../models/buse.js";
const httpbuses = {
    getbuses: async(req, res) => {
        try {
            const buses = await buses.find() 
            res.json(buses);
        } catch (error) {
            res.status(400).json(error)
        }
        
    },
    getbusesnumbus: async(req, res) => {
        const {numbus} =req.params 
        try {
            const buses = await buses.find({numbus:numbus}) 
            res.json(buses);
        } catch (error) {
            res.status(400).json(error)
        }
        
    },
    postAgregarbus: async(req, res) => {
        try{
        const {conductore, placa, numbus,estadobus,createAd,estado}= req.body;
        const buse = new buse ({conductore, placa, numbus,estadobus,createAd,estado})
        buse.save()

        res.json({buse})
    }catch(error){
        res.json({})
    }
},

    putEditarbus:async(req, res) => {
        const numbus = (req.params.numbus);
        const {placa, estadobus, estado} = req.body
        const bus = bd.buses.find(a => a.numbus == numbus);
    
        if (bus) {
            bus.placa = placa;
            bus.estadobus = estadobus;
            bus.estado = estado;
            res.send("Exitoso")
        }
    },
    deletebus:async(req, res) => {
        const {numbus}= req.params
        const buses= buse.findOneAndDelete({numbus:numbus})
        res.json(buses)
    },
    }
export default httpbuses