import axios from 'axios'

export default class Requester {
  public static request (url) {
    return axios.get(url, {
      headers: {
        UserAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36'
      }
    })
  }
}
