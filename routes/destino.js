import { Router } from "express";
import httpdestino from "../controllers/destino.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import { validarJWT } from "../middelwares/validar.js";

const router=new Router()

router.get('/destino', httpdestino.getdestino)
router.get('/destino/:cedula', httpdestino.getdestinocedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("horasalida", "la horasalida es obligatoria").not().isEmpty(),
    check("horallegada", "la horallegada es obligatoria").not().isEmpty(),
    validarCampos
],httpdestino.postAgregardestino );
router.put('/destino/:cedula',[validarJWT], httpdestino.putEditardestino);
router.delete('/destino/:cedula', httpdestino.deletedestino);

export default router