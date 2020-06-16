export const isEmailValid = (email: string): boolean => {
  const regExpression = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g
  return regExpression.test(String(email).toLowerCase())
}

export const mergeDateAndTime = (date: Date, time: Date): Date =>
  new Date(date.setTime(time.getTime()))
