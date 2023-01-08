import { TestScheduler } from 'rxjs/testing'
import { REGISTER_USER_ACTION_TYPE } from '../actions'
import { registerUserEpic } from '../epics'

describe('test user epics', () => {
  const testScheduler = new TestScheduler((actual, expected) => {
    console.log('-----------', actual, expected)
    // expect(actual).deep.equal(expected)
  })

  it('test register user', () => {
    testScheduler.run(({ hot, expectObservable }) => {
      const action$ = hot('-a', {
        a: {
          type: REGISTER_USER_ACTION_TYPE,
          payload: { email: 'test', password: 'test' },
        },
      })

      const output$ = registerUserEpic(action$)

      expectObservable(output$).toBe('---a', {
        a: {
          type: REGISTER_USER_ACTION_TYPE,
          response: {},
        },
      })
    })
  })
})
