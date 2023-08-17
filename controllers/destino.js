import Destino from "../models/destino.js"

const httpdestino = {
    getdestino: async (req, res) => {
        try {
            const destino = await Destino.find()
            res.json({destino})

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getdestinonombre: async (req, res) => {
        const { nombre } = req.params
        try {
            const destino = await Destino.find({ nombre })
            res.json({ destino })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postAgregardestino: async (req, res) => {
        try {
            const { nombre, horasalida, horallegada } = req.body
            const destino = new Destino({ nombre, horasalida, horallegada })
            await destino.save()
            res.json({ destino })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putEditardestino: async (req, res) => {
        try {
            const {id}=req.params
            const destino = await Destino.findByIdAndUpdate(id,{nombre},{new:true})
            res.json({destino})
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deletedestino: async (req, res) => {
        try {
            const {id}=req.params
            const destino =await Destino.findByIdAndDelete(id)
        } catch (error) {
            res.status(400).json({ error })
        }
    },
}
export default httpdestino