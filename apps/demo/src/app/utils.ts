import colorize from 'json-colorizer'
import { JsonValue } from 'type-fest'
import { gray } from 'chalk'

export function log(item: JsonValue) {
  console.log(gray(`${typeof item}:`), colorize(JSON.stringify(item, null, 2)))
}
