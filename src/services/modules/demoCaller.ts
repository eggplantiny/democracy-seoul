import axios from 'axios'
require('dotenv').config();

const API_KEY = process.env.API_KEY

const baseUrl = `http://openAPI.seoul.go.kr:8088/${API_KEY}/json/ChunmanFreeSuggestions`

export default async function (start: number = 1, end: number = 100) {
  const url = `${baseUrl}/${start}/${end}`;
  const { data } = await axios.get(url);

  const { list_total_count, RESULT, row } = data.ChunmanFreeSuggestions;

  return row
}
