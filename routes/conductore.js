import { Router } from "express";
import httpconductor from "../controllers/conductore.js";
import { check } from "express-validator";

const router=new Router()

router.get('/conductor', httpconductor.getconductor)
router.get('/conductor/:cedula', httpconductor.getconductorcedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("edad", "la edad es obligatoria").not().isEmpty(),
    check("rutas", "las rutas son obligatorias").not().isEmpty(),
],httpconductor.postAgregarconductor );
router.put('/conductor/:cedula', httpconductor.putEditarconductor);
router.delete('/conductor/:cedula', httpconductor.deleteconductor);

export default router