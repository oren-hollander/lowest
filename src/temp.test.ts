import { zip } from 'lodash'

const doSomethingAsync = (id: string): Promise<string> =>
  new Promise<string>(resolve =>
    setTimeout(() => {
      resolve(`this is the ${id}`)
    }, 500)
  )

const arr: { id: string }[] = [{ id: 'abc' }, { id: 'xyz' }, { id: 'blah' }]

test('async reduce version', async () => {
  const start = performance.now()

  const result = await arr.reduce(async (accm, item) => {
    const accmObj = await accm
    accmObj[item.id] = await doSomethingAsync(item.id)
    return accmObj
  }, Promise.resolve({} as Record<string, string>))

  const end = performance.now()

  console.log(result)
  console.log(`Test run time: ${end - start} milliseconds`)
})

test('async reduce no mutation version', async () => {
  const start = performance.now()

  const result = await arr.reduce(async (accm, item) => {
    const accmObj = await accm
    return { ...accmObj, [item.id]: await doSomethingAsync(item.id) }
  }, Promise.resolve({} as Record<string, string>))

  const end = performance.now()

  console.log(result)
  console.log(`Test run time: ${end - start} milliseconds`)
})

/*

My notes:

We can separate the async from the sync by first mapping the async part and then reducing the sync part
It could look like this:

  const results = await Promise.all(arr.map(async item => [item.id, await doSomethingAsync(item.id)]))
  const result = results.reduce((accm, [id, res]) => ({ ...accm, [id]: res }), {})

This also has the benefit that the async calls are done in parallel and not sequentially which is usually preferred.

Also, I prefer to avoid mutations inside the reducer function (unless I have a good reason, usually performance).
So, I would use:

  return { ...accmObj, [item.id]: await doSomethingAsync(item.id) }

instead of

  accmObj[item.id] = await doSomethingAsync(item.id)
  return accmObj


*/

test('async map version', async () => {
  const start = performance.now()

  const ids = arr.map(item => item.id)
  const results = await Promise.all(arr.map(item => doSomethingAsync(item.id)))
  const indexedResults = zip(results, ids) as [string, string][]

  const result = indexedResults.reduce((accm, [id, res]) => ({ ...accm, [id]: res }), {} as Record<string, string>)

  const end = performance.now()

  console.log(result)
  console.log(`Test run time: ${end - start} milliseconds`)
})

test('async map version - no zip', async () => {
  const start = performance.now()

  const results = await Promise.all(arr.map(async item => [item.id, await doSomethingAsync(item.id)]))
  const result = results.reduce((accm, [id, res]) => ({ ...accm, [id]: res }), {} as Record<string, string>)

  const end = performance.now()

  console.log(result)
  console.log(`Test run time: ${end - start} milliseconds`)
})
