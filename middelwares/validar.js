import  jwt  from "jsonwebtoken";
import Vendedor from "../models/vendedor.js";
import "dotenv/config"

const generarJWT = (uid) => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        jwt.sign(payload, process.env.SECRETORPRIVATEKEY, {
            expiresIn: "12h"
        }, (err, token) => {
            if (err) {
                console.log(err);
                reject("No se pudo generar el token")
            } else {
                resolve(token)
            }
        })
    })
}


const validarJWT = async (req, res, next) => {
    const token = req.header("x-token");
    
    if (!token) {
        return res.status(401).json({
            msg: "No hay token en la peticion"
        })
        
    }

    try {
        const { uid } = jwt.verify(token, process.env.SECRETORPRIVATEKEY)

        let usuario = await Vendedor.findById(uid);

        if (!usuario) {
            return res.status(401).json({
                msg: "Token no existe "//- usuario no existe DB
            })
        }


        if (usuario.estado == 0) {
            return res.status(401).json({
                msg: "Token no válido " //- usuario con estado: false
            })
        }
        req.vendedor=usuario

        next();

    } catch (error) {
        res.status(401).json({
            msg: "Token no "
        })
    }
}


export { generarJWT, validarJWT }