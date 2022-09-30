import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'

import gameRoute from './routes/game'

const app: Application = express()
app.use(express.json())
app.use(cors())

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'It works' })
})

// Import routes
app.use('/api', gameRoute)

export default app
