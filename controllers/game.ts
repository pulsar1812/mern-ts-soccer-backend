import { Request, Response } from 'express'
import Game from '../models/Game'

export const getAllGames = async (req: Request, res: Response) => {
  try {
    const games = await Game.find()

    res.status(200).json(games)
  } catch (err) {
    res.status(500).json({ message: err })
  }
}

export const createGame = async (req: Request, res: Response) => {
  try {
    const createdGame = await Game.create(req.body)

    res.status(201).json(createdGame)
  } catch (err) {
    res.status(500).json({ message: 'Failed to create game' })
  }
}
