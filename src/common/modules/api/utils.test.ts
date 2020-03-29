import { of } from 'rxjs'
import { marbles } from 'rxjs-marbles/jest'
import * as fetch from 'rxjs/fetch'
import * as SUT from './utils'

describe('utils', () => {
  describe('makeRequest$', () => {
    it(
      'should return the json response if the response from the request is ok',
      marbles((m) => {
        // given ... we have have mocked fetch to return an ok response
        const response: any = {
          ok: true,
          status: 200,
          json: () => of({ test: 'some property' }),
        }
        jest.spyOn(fetch, 'fromFetch').mockImplementation(() => of(response))

        // when ...  we call the makeRequest$ method
        const result$ = SUT.makeRequest$({
          url: 'test',
          headers: {},
          method: 'GET',
        })

        const values: any = {
          a: { test: 'some property' },
        }
        const expected$ = '(a|)'
        // then ... we should get the data back as expected
        m.equal(result$, expected$, values)
      }),
    )

    it(
      'should throw an error with the error message describing the error if the response returned is not ok',
      marbles((m) => {
        // given ... we have have mocked fetch to return an non ok response
        const response: any = {
          ok: false,
          status: 401,
          json: () => of({ error: { message: 'Error: 401' } }),
        }

        jest.spyOn(fetch, 'fromFetch').mockImplementation(() => of(response))

        // when ...  we call the makeRequest$ method
        const result$ = SUT.makeRequest$({
          url: 'test',
          headers: {},
          method: 'POST',
          body: JSON.stringify({
            test: 'some data',
          }),
        })

        const expected$ = m.cold('#', undefined, new Error('Error: 401'))

        // then ... we should get the data back as expected
        m.expect(result$).toBeObservable(expected$)
      }),
    )
  })
})
