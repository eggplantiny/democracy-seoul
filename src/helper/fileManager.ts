import * as fs from 'fs/promises'
import path from 'path'

export function save (fileName: string, data: string) {
  const filePath = path.resolve('./temp/', fileName)
  return fs.writeFile(filePath, data, 'utf-8')
}

export function load (fileName: string) {
  const filePath = path.resolve('./temp/', fileName)
  return fs.readFile(filePath, 'utf-8')
}
