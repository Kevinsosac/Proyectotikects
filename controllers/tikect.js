import tikect from "../models/tikect.js";
const httptikect = {
    gettikect: async (req, res) =>{
        try {
            const Tikect = await tikect.find().populate("buse", ["placa", "numbus"]
            ).populate("destino", ["nombre"]
            ).populate("cliente", ["nombre", "telefono"]
            ).populate("conductor", ["nombre", "telefono"]
            ).populate("vendedor", ["nombre", "telefono"])
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
    getTikectsporfechas: async (req, res) => { //listar por fechas
        try {
            const { fechaInicial, fechaFinal } = req.query;

            if (!fechaInicial || !fechaFinal) {
                return res.status(400).json({ error: 'Debes proporcionar las fechas de inicio y fin.' });
            }

            const tickets = await tikect.find({
                fechacreacion: {
                    $gte: new Date(fechaInicial),
                    $lte: new Date(fechaFinal),
                }
            });

            res.json({ tickets });
        } catch (error) {
            res.status(400).json({ error: "Algo salió mal" });
        }
    },
    getticketsPorVendedor: async (req, res) => {  //listar tikects de vendedor
        try {
            const { vendedor_id } = req.params;
            if (!vendedor_id) {
                return res.status(400).json({ error: 'Debes proporcionar el ID del vendedor.' });
            }
    
            const tickets = await tikect.find({ vendedor: vendedor_id })
    
            res.json({ tickets });
        } catch (error) {
            res.status(400).json({ error: "Algo salió mal" });
        }
    },

    getRutasDeConductorPorId: async (req, res) => {
        try {
            const { id } = req.params;

            // Buscamos los tickets relacionados al conductor específico
            const tikects = await tikect.find({ conductor: id }).populate("conductor", ['rutas'])

            if (!tikects.length) {
                return res.status(404).json({ error: "No se encontraron tickets para este conductor" });
            }

            const rutas = tikects.map(tikect => tikect.conductor.rutas);

            res.json({ rutas });
        } catch (error) {
            res.status(400).json({ error });
        }
    },
    getGananciasPorFecha: async (req, res) => {
        try {
            const { fechaInicial, fechaFinal } = req.query;
    
            if (!fechaInicial || !fechaFinal) {
                return res.status(400).json({ error: 'Debes proporcionar las fechas de inicio y fin.' });
            }
    
            const tickets = await tikect.find({
                fechacreacion: {
                    $gte: new Date(fechaInicial),
                    $lte: new Date(fechaFinal),
                }
            });
    
            // Calculate ganancia por fecha
            const totalGanancias = tickets.reduce((total, tikect) => total + tikect.precio, 0);
    
            res.json({ totalGanancias });
        } catch (error) {
            res.status(400).json({ error: "Algo salió mal" });
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