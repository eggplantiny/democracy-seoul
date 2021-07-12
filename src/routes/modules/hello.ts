import { Router } from 'express'

const router = Router();

router.get('/', (req, res) => {
  res.json({
    hello: 'World'
  })
})

export default {
  name: 'hello',
  router
}
