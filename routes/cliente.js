import { Router } from "express";
import httpcliente from "../controllers/cliente.js";
import { check } from "express-validator";

const router=new Router()

router.get('/cliente',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("edad", "la edad es obligatoria").not().isEmpty(),
], httpcliente.getcliente)
router.get('/cliente/:cedula', httpcliente.getclienteCedula)
router.post('/agregar',httpcliente.postAgregarcliente );
router.put('/cliente/:cedula', httpcliente.putEditarcliente);
router.delete('/cliente/:cedula', httpcliente.deletecliente);

export default router