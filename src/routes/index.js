console.log('Holi')
import express from 'express';
import {pool} from './db.js'

const app = express()

app.get('/ping', async (req, res) => {
    const [result] = await pool.query('SELECT "PONG" AS result')
    res.json(result[0])
})

app.get('/Prueba', (req, res) => res.send('Probando'))

app.post('/Probando', (req, res) => res.send('Probando POST'))

app.post('/ConsultaStatus', (req,res) => res.send('Si hay un estatus'))

app.listen(3000)