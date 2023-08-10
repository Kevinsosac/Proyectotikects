import { Router } from "express";
import httpconductor from "../controllers/conductore.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import { validarJWT } from "../middelwares/validar.js";

const router=new Router()

router.get('/conductor', httpconductor.getconductor)
router.get('/conductor/:cedula',[
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
], httpconductor.getconductorcedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("edad", "la edad es obligatoria").not().isEmpty(),
    check("rutas", "las rutas son obligatorias").not().isEmpty(),
    validarCampos
],httpconductor.postAgregarconductor );
router.put('/conductor/:cedula',[
    validarJWT,
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos
], httpconductor.putEditarconductor);
router.delete('/conductor/:cedula',[
    validarJWT,
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos
], httpconductor.deleteconductor);

export default router