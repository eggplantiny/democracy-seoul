import axios from 'axios'
import cheerio from 'cheerio'
import {IDemocracyPage} from '../../types'
import { save } from '../../helper/fileManager'

const baseUrl = 'https://democracy.seoul.go.kr/front/freeSuggest/view.do'

function refineTitle (title: string) {
  return title.replace(/[\s|스크랩|공유]+/g, ' ').trim()
}

export async function saveHTML (sn: string): Promise <void> {
  const url = `${baseUrl}?sn=${sn}`;
  const { data } = await axios.get(url);
  await save(`${sn}.html`, data)
}

export default async function (sn: string): Promise <IDemocracyPage> {
  const url = `${baseUrl}?sn=${sn}`;
  const { data } = await axios.get(url);

  const $ = cheerio.load(data);

  const title = refineTitle($('#content > div.cont-view-area > h4').text())
  const content = $('#content > div.cont-view-area > div.txt-block > pre').text()
  const topics = $('#content > div.cont-view-area > div.txt-block > div.hash-detail > ul > li > a')
    .text()
    .split(/##|#/)
    .filter(str => str.length > 0)
    .map(str => str.trim())

  return {
    title,
    url,
    content,
    topics
  }
}
