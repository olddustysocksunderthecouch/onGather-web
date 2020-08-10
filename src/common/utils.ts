import formatISO from 'date-fns/formatISO'
import parseISO from 'date-fns/parseISO'

export const isEmailValid = (email: string): boolean => {
  const regExpression = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  return regExpression.test(String(email).toLowerCase())
}

export const mergeDateAndTime = (date: Date, time: Date): Date =>
  parseISO(
    formatISO(date, { representation: 'date' }).concat(
      'T',
      formatISO(time, { representation: 'time' }),
    ),
  )
