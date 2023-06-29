import { Router } from "express";
import httptikect from "../controllers/tikect.js";
import { check } from "express-validator";

const router=new Router()

router.get('/tikect',[
    check("origen", "el origen es obligatorio").not().isEmpty(),
    check("precio", "el precio es obligatorio").not().isEmpty(),
    check("destino", "el destino es obligatorio").not().isEmpty(),
    check("buse", "el bus es obligatorio").not().isEmpty(),
    check("cliente", "el cliente es obligatorio").not().isEmpty(),
    check("conductor", "el conductor es obligatorio").not().isEmpty(),
    check("vendedor", "el vendedor es obligatorio").not().isEmpty(),
], httptikect.gettikect)
router.get('/tikect/:id', httptikect.gettikectid)
router.post('/agregar',httptikect.postAgregartikect );
router.put('/tikect/:id', httptikect.putEditartikect);
router.delete('/tikect/:id', httptikect.deletetikect);

export default router