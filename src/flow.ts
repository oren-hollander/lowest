import { Transform } from './transform'

export function flow<T, TX1, TX2, TX3, TX4, TX5>(
  values: T,
  f1: Transform<T, TX1>,
  tx2: Transform<TX1, TX2>,
  tx3: Transform<TX2, TX3>,
  tx4: Transform<TX3, TX4>,
  tx5: Transform<TX4, TX5>
): TX5
export function flow<T, TX1, TX2, TX3, TX4>(
  values: T,
  tx1: Transform<T, TX1>,
  tx2: Transform<TX1, TX2>,
  tx3: Transform<TX2, TX3>,
  tx4: Transform<TX3, TX4>
): TX4
export function flow<T, TX1, TX2, TX3>(
  values: T,
  f1: Transform<T, TX1>,
  tx2: Transform<TX1, TX2>,
  tx3: Transform<TX2, TX3>
): TX3
export function flow<T, TX1, TX2>(values: T, f1: Transform<T, TX1>, tx2: Transform<TX1, TX2>): TX2
export function flow<T, TX1>(values: T, f1: Transform<T, TX1>): TX1
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flow<T>(values: T, ...txs: ((...args: unknown[]) => any)[]): unknown {
  return txs.reduce((values, tx) => tx(values), values)
}
