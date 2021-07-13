import { Router } from 'express'
import { demoCaller, demoScraper } from '../../services'
import { saveHTML } from '../../services/modules/demoScraper'

const router = Router();

router.get('/', async (req, res) => {
  const items = await demoCaller()
  res.json({
    items
  })
})

router.get ('/:sn', async (req, res) => {
  const { sn } = req.params
  const result = await demoScraper(sn)
  res.json({
    result
  })
})


export default {
  name: 'democracy',
  router
}
