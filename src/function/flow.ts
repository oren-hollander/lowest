import { Fn } from './function'

/**
 * Composes and executes several functions
 * @param values The input to the composed function
 * @param f1 See below
 * @param f2 See below
 * @param f3 See below
 * @param f4 See below
 * @param f5 See below
 * @return the last function's output
 * The f1..f5 functions are executed in order, the first one is fed with ```values```
 * and each output is fed to the next function's input.
 */
export function flow<T, F1, F2, F3, F4, F5>(
  values: T,
  f1: Fn<T, F1>,
  f2: Fn<F1, F2>,
  f3: Fn<F2, F3>,
  f4: Fn<F3, F4>,
  f5: Fn<F4, F5>
): F5

/**
 * See the docs for the first overload
 */
export function flow<T, F1, F2, F3, F4>(values: T, f1: Fn<T, F1>, f2: Fn<F1, F2>, f3: Fn<F2, F3>, f4: Fn<F3, F4>): F4

/**
 * See the docs for the first overload
 */
export function flow<T, F1, F2, F3>(values: T, f1: Fn<T, F1>, f2: Fn<F1, F2>, f3: Fn<F2, F3>): F3

/**
 * See the docs for the first overload
 */
export function flow<T, F1, F2>(values: T, f1: Fn<T, F1>, f2: Fn<F1, F2>): F2

/**
 * See the docs for the first overload
 */
export function flow<T, F1>(values: T, f1: Fn<T, F1>): F1

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function flow<T>(values: T, ...fs: ((...fs: unknown[]) => any)[]): unknown {
  return fs.reduce((values, f) => f(values), values)
}
