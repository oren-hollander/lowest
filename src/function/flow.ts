import { Fn } from './function'

export function flow<T, TX1, TX2, TX3, TX4, TX5>(
  values: T,
  f1: Fn<T, TX1>,
  tx2: Fn<TX1, TX2>,
  tx3: Fn<TX2, TX3>,
  tx4: Fn<TX3, TX4>,
  tx5: Fn<TX4, TX5>
): TX5
export function flow<T, TX1, TX2, TX3, TX4>(
  values: T,
  tx1: Fn<T, TX1>,
  tx2: Fn<TX1, TX2>,
  tx3: Fn<TX2, TX3>,
  tx4: Fn<TX3, TX4>
): TX4
export function flow<T, TX1, TX2, TX3>(values: T, f1: Fn<T, TX1>, tx2: Fn<TX1, TX2>, tx3: Fn<TX2, TX3>): TX3
export function flow<T, TX1, TX2>(values: T, f1: Fn<T, TX1>, tx2: Fn<TX1, TX2>): TX2
export function flow<T, TX1>(values: T, f1: Fn<T, TX1>): TX1

/**
 * Composes several functions
 * @param values The input to the composed function
 * @param fs Functions that are executed in order, each output is fed to the next function's input
 * @return the last function's output
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flow<T>(values: T, ...fs: ((...fns: unknown[]) => any)[]): unknown {
  return fs.reduce((values, f) => f(values), values)
}
