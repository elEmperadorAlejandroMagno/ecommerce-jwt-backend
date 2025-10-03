import fs, { read } from 'fs'

export function readJsonFile(path) {
  const data = fs.readFileSync(path, "utf-8");
  return JSON.parse(data)
}

export function writeJsonFile(path, newData) {
  fs.writeFileSync(path, JSON.stringify(newData, null, 2))
}

export default { readJsonFile, writeJsonFile }

