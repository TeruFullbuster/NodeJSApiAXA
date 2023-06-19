console.log('Holi')
import express from 'express';

import RoutesConsult from './routes/Consultas.routes.js'
import IndexRoutes from './routes/index.routes.js'

import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

app.use(IndexRoutes)

app.use(RoutesConsult)

app.listen(3000)