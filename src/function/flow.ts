import { Fn } from './function'

/**
 * Composes and executes several functions
 * @param values The input to the composed function
 * @param f1 Functions that are executed in order, each output is fed to the next function's input
 * @param f2
 * @param f3
 * @param f4
 * @param f5
 * @return the last function's output
 */
export function flow<T, F1, F2, F3, F4, F5>(
  values: T,
  f1: Fn<T, F1>,
  f2: Fn<F1, F2>,
  f3: Fn<F2, F3>,
  f4: Fn<F3, F4>,
  f5: Fn<F4, F5>
): F5
export function flow<T, F1, F2, F3, F4>(values: T, f1: Fn<T, F1>, f2: Fn<F1, F2>, f3: Fn<F2, F3>, f4: Fn<F3, F4>): F4
export function flow<T, F1, F2, F3>(values: T, f1: Fn<T, F1>, f2: Fn<F1, F2>, f3: Fn<F2, F3>): F3
export function flow<T, F1, F2>(values: T, f1: Fn<T, F1>, f2: Fn<F1, F2>): F2
export function flow<T, F1>(values: T, f1: Fn<T, F1>): F1

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flow<T>(values: T, ...fs: ((...fs: unknown[]) => any)[]): unknown {
  return fs.reduce((values, f) => f(values), values)
}
