import Vendedor from "../models/vendedor.js";
const httpvendedor = {
    getvendedor: async (req, res) => {
        try {
            const vendedor = await Vendedorendedor.find()
            res.json({ vendedor })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    getvendedorcedula: async (req, res) => {
        const { cedula } = req.params
        try {
            const vendedor = await Vendedorendedor.find({ cedula })
            res.json({ vendedor })

        } catch (error) {
            res.status(400).json({ error })
        }
    },
    postAgregarvendedor: async (req, res) => {
        try {
            const { nombre, cedula, apellido, telefono, usuario, contraseña } = req.body
            const vendedor = new Vendedor({ nombre, cedula, apellido, telefono, usuario, contraseña })
            await vendedor.save()

            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    putEditarvendedor: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndUpdate(id, { usuario }, { new: true })
            res.json({ vendedor })
        } catch (error) {
            res.status(400).json({ error })
        }
    },
    deletevendedor: async (req, res) => {
        try {
            const { id } = req.params
            const vendedor = await Vendedor.findByIdAndDelete(id)
        } catch (error) {
            res.status(400).json({ error })
        }
    },
}
export default httpvendedor