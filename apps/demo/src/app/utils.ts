import colorize from 'json-colorizer'
import { JsonValue } from 'type-fest'

export function log(item: JsonValue) {
  console.log(`${typeof item}:`, colorize(JSON.stringify(item, null, 2)))
}
