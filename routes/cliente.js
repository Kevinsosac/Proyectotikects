import { Router } from "express";
import httpcliente from "../controllers/cliente.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import { validarJWT } from "../middelwares/validar.js";

const router=new Router()

router.get('/cliente', httpcliente.getcliente)
router.get('/cliente/:cedula',[
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos
], httpcliente.getclienteCedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("edad", "la edad es obligatoria").not().isEmpty(),
    validarCampos
],httpcliente.postAgregarcliente );
router.put('/cliente/:cedula',[
    validarJWT,
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos

], httpcliente.putEditarcliente);
router.delete('/cliente/:cedula',[
    validarJWT,
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos

], httpcliente.deletecliente);

export default router