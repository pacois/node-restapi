import { Router } from "express"
//Se importa la funcion ping de index.controllers.js
import { ping } from '../controllers/index.controllre.js'

const router = Router()
//la invocacion get llama la función ping
router.get('/ping', ping)

export default router
