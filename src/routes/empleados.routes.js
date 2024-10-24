// de express solo importamos el router 
import { Router } from "express"
import { getEmpleados, createEmpleados, updateEmpleados, deleteEmpleados, getEmpleado } from '../controllers/empleados.controller.js'

//se crea el enrutador
const router = Router()

// traemos las rutas que estaban en index.js, y en el index se importan
// Indican que cuando se visiten las rutas se ejecutan las funciones
router.get('/empleados', getEmpleados)

router.get('/empleados/:id', getEmpleado)

router.post('/empleados', createEmpleados)

router.patch('/empleados/:id', updateEmpleados)

router.delete('/empleados/:id', deleteEmpleados)

// y se importa
export default router

