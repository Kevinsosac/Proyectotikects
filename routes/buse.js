import { Router } from "express";
import httpbuses from "../controllers/buse.js";
import { check } from "express-validator";
import { validarJWT } from "../middelwares/validar.js"
import validarCampos from "../middelwares/validator.js";
const router=new Router()

router.get('/bus', httpbuses.getbuses)
router.get('/bus/:numbus', httpbuses.getbusesnumbus)
router.post('/agregar',[
    check("conductore", "El nombre es obligatorio").not().isEmpty(),
    check("placa", "La placa es obligatoria").not().isEmpty(),
    check("numbus", "El numero de bus es obligatorio").not().isEmpty(),
    check("estadobus", "El estado del bus es obligatorio").not().isEmpty(),
    validarCampos
],httpbuses.postAgregarbus );
router.put('/bus/:numbus',[
    validarCampos,
    check("numbus", "Digite el numero del bus").not().isEmpty(),
    validarJWT
], httpbuses.putEditarbus);
router.delete('/bus/:numbus', httpbuses.deletebus);

export default router  
    