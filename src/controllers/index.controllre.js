// se importa el pool, porque aqui se requiere
import { pool } from '../db.js'

//traemos la funcion get que estaba en index.routes.js y se exporta
export const ping = async (req, res) => {
    const [result] = await pool.query('SELECT 1+1 AS result')
    res.json(result[0])
}