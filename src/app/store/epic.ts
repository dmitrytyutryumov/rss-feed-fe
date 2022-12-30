import { combineEpics } from 'redux-observable'
import { catchError } from 'rxjs'

export const rootEpic = (action$, store$, dependencies) =>
  combineEpics()(action$, store$, dependencies).pipe(
    catchError((error, source) => {
      console.error(error)
      return source
    })
  )
