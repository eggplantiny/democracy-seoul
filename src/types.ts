import { Router } from 'express'

export interface IRoute {
  name: string,
  router: Router
}

export interface IDemocracyPage {
  url: string,
  content: string,
  title: string,
  topics: string[]
}
