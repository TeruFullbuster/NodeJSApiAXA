import { Router } from 'express';

import {ProbandoConexion, Consulta, SDConsulta} from '../controllers/Consultas.controllers.js'

const router = Router()

router.get('/Prueba', (req, res) => res.send('Probando'))

router.get('/Probando', ProbandoConexion)

router.post('/Consulta', Consulta)

router.post('/AXAPost', SDConsulta)

export default router;