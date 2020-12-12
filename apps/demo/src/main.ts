import { index } from './app/'

console.clear()

index().catch((err) => {
  console.error('err', err)
})
