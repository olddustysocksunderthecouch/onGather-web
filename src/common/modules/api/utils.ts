import { Observable, of, from, throwError } from 'rxjs'
import { fromFetch } from 'rxjs/fetch'
import { flatMap } from 'rxjs/operators'
import { FetchOptions } from './types'

export const makeRequest$ = (options: FetchOptions): Observable<any> => {
  return fromFetch(options.url, options).pipe(
    flatMap((response) =>
      from(response.json()).pipe(
        flatMap((json) =>
          response.ok
            ? of(json)
            : throwError(new Error(`${json?.error?.message}`)),
        ),
      ),
    ),
  )
}
