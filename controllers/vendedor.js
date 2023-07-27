import Vendedor from "../models/vendedor.js";
const httpvendedor = {
    getvendedor: async (req, res) => {
        try {
            const vendedor = await Vendedor.find()
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
            const { nombre, cedula, apellido, telefono, usuario, password } = req.body
            const vendedor = new Vendedor({ nombre, cedula, apellido, telefono, usuario, password })
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

    login: async (req, res) => {
        const { email, password } = req.body;

        try {
            const vendedor = await Vendedor.findOne({ email })
            if (!vendedor) {
                return res.status(400).json({
                    msg: "vendedor / Password no son correctos"
                })
            }

            if (vendedor.estado === 0) {
                return res.status(400).json({
                    msg: "vendedor Inactivo"
                })
            }

            const validPassword = bcryptjs.compareSync(password, vendedor.password);
            if (!validPassword) {
                return res.status(401).json({
                    msg: "vendedor / Password no son correctos"
                })
            }

            const token = await generarJWT(Vendedor.id);

            res.json({
                vendedor,
                token
            })

        } catch (error) {
            return res.status(500).json({
                msg: "Hable con el WebMaster"
            })
        }
    },
}
export default httpvendedor