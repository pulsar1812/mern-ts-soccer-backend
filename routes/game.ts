import { Router } from 'express'

import { createGame, getAllGames } from '../controllers/game'

const router: Router = Router()

router.route('/games').get(getAllGames).post(createGame)

export default router
