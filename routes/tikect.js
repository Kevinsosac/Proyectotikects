import { Router } from "express";
import httptikect from "../controllers/tikect.js";
import { check } from "express-validator";
import validarCampos from "../middelwares/validator.js";
import { validarJWT } from "../middelwares/validar.js";

const router=new Router()

router.get('/tikect', httptikect.gettikect)
router.get('/tikect/:id', httptikect.gettikectid)
router.get("/tikects/fecha", httptikect.getTikectsporfechas);
router.get("/tikects/vendedor/:vendedor_id", httptikect.getticketsPorVendedor);
router.get("/tikects/:id", httptikect.getRutasDeConductorPorId);
router.get("/tikects/", httptikect.getGananciasPorFecha)
router.post('/agregar',[
    check("origen", "el origen es obligatorio").not().isEmpty(),
    check("precio", "el precio es obligatorio").not().isEmpty(),
    check("destino", "el destino es obligatorio").not().isEmpty(),
    check("buse", "el bus es obligatorio").not().isEmpty(),
    check("cliente", "el cliente es obligatorio").not().isEmpty(),
    check("conductor", "el conductor es obligatorio").not().isEmpty(),
    check("vendedor", "el vendedor es obligatorio").not().isEmpty(),
    validarCampos
],httptikect.postAgregartikect );
router.put('/tikect/:id',[
    validarCampos,
    check("id", "Digite id").not().isEmpty(),
    check("id", "Digite id").isMongoId(),
    validarJWT], httptikect.putEditartikect);
router.delete('/tikect/:id',[
    validarJWT,
    check("id", "Digite id").not().isEmpty(),
    check("id", "Digite id").isMongoId(),
    validarCampos
], httptikect.deletetikect);

export default router