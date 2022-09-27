import express, { Application, Request, Response } from 'express'
import cors from 'cors'
import 'dotenv/config'

const app: Application = express()
app.use(express.json())

// Import routes

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'It works' })
})

export default app
