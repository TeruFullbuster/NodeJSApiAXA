import {pool} from '../db.js'

export const ProbandoConexion = async (req, res) => {
    const [rows] = await pool.query('Select * From RespuestasAXA')
    res.json(rows)
}

export const Consulta = async (req, res) => {
    const [rows] = await pool.query('Select * From RespuestasAXA')
    res.json(rows)
}

export const SDConsulta = async (req, res) => {

    const {documento, nombre, caratula, identificador} = req.body;

    const [rows] = await pool.query('Insert into RespuestasAXA (documento,nombre,caratula,identificador) VALUES (?,?,?,?)', [documento, nombre, caratula, identificador])
    
    res.json({rows})

}