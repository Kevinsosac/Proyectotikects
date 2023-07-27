import Buse from "../models/buse.js";
const httpbuses = {
    getbuses: async(req, res) => {
        try {
            const buses = await Buse.find() 
            res.json(buses);
        } catch (error) {
            res.status(400).json(error)
        }
        
    },
    getbusesnumbus: async(req, res) => {
        const {numbus} =req.params 
        try {
            const buses = await Buse.find({numbus:numbus}) 
            res.json(buses);
        } catch (error) {
            res.status(400).json(error)
        }
        
    },
    postAgregarbus: async(req, res) => {
        try{
        const {conductore, placa, numbus,estadobus}= req.body;
        const buse = new Buse({conductore, placa, numbus,estadobus})
        buse.save()

        res.json({buse})
    }catch(error){
        res.json({error})
    }
},

    putEditarbus:async(req, res) => {
        try {
            const {id} = req.params
        const {placa, numbus} = req.body
        const buses = await Buse.findByIdAndUpdate(id, {placa, numbus}, {new:true})
        res.json({buses})
        } catch (error) {
            res.status(400).json({error})
        }
        
    },
    deletebus:async(req, res) => {
        const {numbus}= req.params
        const buses= Buse.findOneAndDelete({numbus:numbus})
        res.json(buses)
    },
    }
export default httpbuses