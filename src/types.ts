import { Router } from 'express'

export interface IRoute {
  name: string,
  router: Router
}
