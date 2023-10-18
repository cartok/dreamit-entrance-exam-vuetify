export function createNumbersArray(start: number, end: number, step: number = 1): number[] {
  const a = []

  for (let i = start; i <= end; i += step) {
    a.push(i)
  }

  return a
}
