import { pool } from "../db.js";

//traemos las funciones que estaban en empleados.routes.js, y se exportan

export const getEmpleados = async (req, res) => {
    try {
        throw new Error("DB error");
        const [rows] = await pool.query("SELECT * FROM empleados");
        res.json(rows);
    } catch (error) {
        return res.status(500).json({
            message: "algo paso",
        });
    }
};

export const getEmpleado = async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
            req.params.id,
        ]);
        if (rows.length <= 0)
            return res.status(404).json({ message: "Empleado no encontrado" });
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            message: "algo paso",
        });
    }
};

export const createEmpleados = async (req, res) => {
    const { nombre, salario } = req.body;
    //aqui se pueden validar los datos....
    try {
        const [rows] = await pool.query(
            "INSERT INTO empleados (nombre, salario) VALUES (?, ?)",
            [nombre, salario]
        );
        //res.send({ rows })
        //esto obtiene el objeto con el insertId, el cual es autoincrmentado
        res.send({
            id: rows.insertId,
            nombre,
            salario,
        });
    } catch (error) {
        return res.status(500).json({
            message: "algo paso",
        });
    }
};

export const deleteEmpleados = async (req, res) => {
    try {
        const [result] = await pool.query("DELETE FROM empleados WHERE id = ?", [
            req.params.id,
        ]);
        if (result.affectedRows <= 0)
            return res.status(404).json({ message: "Empleado no encontrado" });

        res.send(204);
    } catch (error) {
        return res.status(500).json({
            message: "algo paso",
        });
    }
};

export const updateEmpleados = async (req, res) => {
    const { id } = req.params; // parametro en la URL --> equivale a (const id = req.params.id)
    const { nombre, salario } = req.body; // datos en formulario

    try {
        const [result] = await pool.query(
            "UPDATE empleados SET nombre = IFNULL(?, nombre), salario = IFNULL(?, salario) WHERE id = ?",
            [nombre, salario, id]
        );
        console.log(result);

        if (result.affectedRows === 0)
            return res.status(404).json({ message: "Empleado no encontrado" });

        const [rows] = await pool.query("SELECT * FROM empleados WHERE id = ?", [
            id,
        ]);

        // res.json(rows) -- devuelve un arreglo
        res.json(rows[0]); // devuelve un objeto
    } catch (error) {
        return res.status(500).json({
            message: "algo paso",
        });
    }
};
