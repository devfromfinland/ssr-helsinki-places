import { TestScheduler } from 'jest'
import { sum } from '../utils/helpers'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})