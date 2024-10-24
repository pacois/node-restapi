import express from 'express'
// Se importan las rutas
import empleadosRoutes from './routes/empleados.routes.js'
import indexRoutes from "./routes/index.routes.js"

//import './config.js'

const app = express()

app.use(express.json())

//se indica el uso de las rutas
app.use('/api', empleadosRoutes)
app.use(indexRoutes)

//funcion middleware, por si no encuentra nada en la ruta (404)
app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint no encontrado'
    })

})

export default app
