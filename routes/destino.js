import { Router } from "express";
import httpdestino from "../controllers/destino.js";
import { check } from "express-validator";

const router=new Router()

router.get('/destino',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("horasalida", "la horasalida es obligatoria").not().isEmpty(),
    check("horallegada", "la horallegada es obligatoria").not().isEmpty(),
], httpdestino.getdestino)
router.get('/destino/:cedula', httpdestino.getdestinocedula)
router.post('/agregar',httpdestino.postAgregardestino );
router.put('/destino/:cedula', httpdestino.putEditardestino);
router.delete('/destino/:cedula', httpdestino.deletedestino);

export default router