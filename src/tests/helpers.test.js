/* eslint-disable camelcase */
import { checkOpeningStatus } from '../utils/helpers'
import { open24h_fullWeek_noException } from '../mocks/mock-data'

describe('checkOpeningStatus function', () => {
  it('no data', () => {
    const result = checkOpeningStatus()
    expect(result).toEqual('No data')
  })

  it('Open 24h, full week, no exception', () => {
    const result = checkOpeningStatus(open24h_fullWeek_noException)
    expect(result).toEqual('Open')
  })

  // TODO: change days and opening hours, then run tests again
})
