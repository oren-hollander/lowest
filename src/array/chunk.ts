import { Tx } from '../transform'

const chunkImpl = <T>(size: number, xs: T[]): T[][] => {
  if (size < 1) {
    throw new Error('Chunk size must be a positive number')
  }

  const result: T[][] = []
  let remaining: T[] = xs
  while (remaining.length > 0) {
    result.push(remaining.slice(0, size))
    remaining = remaining.slice(size)
  }
  return result
}

export function chunk<T>(xs: T[], size: number): T[][]
export function chunk<T>(size: number): Tx<T[], T[][]>
export function chunk<T>(xs_size: T[] | number, size?: number): T[][] | Tx<T[], T[][]> {
  if (size !== undefined) {
    const xs = xs_size as T[]
    return chunkImpl(size, xs)
  } else {
    const size = xs_size as number
    return (xs: T[]): T[][] => chunkImpl(size, xs)
  }
}
