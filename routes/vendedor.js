import { Router } from "express";
import httpvendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import { validarJWT } from "../middelwares/validar.js"
import validarCampos from "../middelwares/validator.js";


const router=new Router()

router.get('/vendedor',[
    validarJWT,
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("contraseña", "la contraseña es obligatoria").not().isEmpty(),
    validarCampos
], httpvendedor.getvendedor)
router.get('/vendedor/:cedula', httpvendedor.getvendedorcedula)
router.post('/agregar',httpvendedor.postAgregarvendedor );
router.put('/vendedor/:cedula', httpvendedor.putEditarvendedor);
router.delete('/vendedor/:id', httpvendedor.deletevendedor);
router.post('/login', httpvendedor.login)

export default router