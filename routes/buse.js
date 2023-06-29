import { Router } from "express";
import httpbuses from "../controllers/buse.js";
import { check } from "express-validator";

const router=new Router()

router.get('/bus',[
    check("conductore", "El nombre es obligatorio").not().isEmpty(),
    check("placa", "La placa es obligatoria").not().isEmpty(),
    check("numbus", "El numero de bus es obligatorio").not().isEmpty(),
    check("estadobus", "El estado del bus es obligatorio").not().isEmpty()
], httpbuses.getbuses)
router.get('/bus/:numbus', httpbuses.getbusesnumbus)
router.post('/agregar',httpbuses.postAgregarbus );
router.put('/bus/:numbus', httpbuses.putEditarbus);
router.delete('/bus/:numbus', httpbuses.deletebus);

export default router  
    