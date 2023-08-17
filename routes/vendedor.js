import { Router } from "express";
import httpvendedor from "../controllers/vendedor.js";
import { check } from "express-validator";
import {validarJWT} from "../middelwares/validar.js"
import validarCampos from "../middelwares/validator.js";


const router=new Router()

router.get('/vendedor', httpvendedor.getvendedor)
router.get('/vendedor/:cedula',[
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    validarCampos
], httpvendedor.getvendedorcedula)
router.post('/agregar',[
    check("nombre", "el nombre es obligatorio").not().isEmpty(),
    check("cedula", "la cedula es obligatoria").not().isEmpty(),
    check("apellido", "el apellido es obligatorio").not().isEmpty(),
    check("telefono", "el telefono es obligatorio").not().isEmpty(),
    check("usuario", "el usuario es obligatorio").not().isEmpty(),
    check("password", "la contraseña es obligatoria").not().isEmpty(),
    validarCampos
],httpvendedor.postAgregarvendedor );
router.put('/vendedor/:id',[
    validarCampos,
    check("id","Digite ID").not().isEmpty(),
    check("id","Digite ID").isMongoId(),
    validarJWT
], httpvendedor.putEditarvendedor);
router.put('vendedor/in/:id',[
    validarJWT,
    check("id","Digite ID").not().isEmpty(),
    check("id","Digite ID").isMongoId(),
    validarCampos
], httpvendedor.putinactivarvendedor)
router.put('vendedor/ac/:id',[
    check("id","Digite ID").not().isEmpty(),
    check("id","Digite ID").isMongoId(),
    validarCampos
], httpvendedor.putactivarvendedor)
router.delete('/vendedor/:id',[
    check("id","Digite ID").not().isEmpty(),
    check("id","Digite ID").isMongoId(),
    validarCampos
], httpvendedor.deletevendedor);
router.post('/login', httpvendedor.login)

export default router