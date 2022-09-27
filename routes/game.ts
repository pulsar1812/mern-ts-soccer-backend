import { Router } from 'express'

import { createGame, getAllGames } from '../controllers/game'

const router: Router = Router()

router.route('/api/games').get(getAllGames).post(createGame)

export default router
