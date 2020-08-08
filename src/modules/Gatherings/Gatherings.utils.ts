export const dateTimeFormatted = (date: Date, timeZone: string): string => {
  const weekday = date.toLocaleString('en', { timeZone, weekday: 'long' }) + ' '
  const day = date.toLocaleString('en', { timeZone, day: 'numeric' }) + ' '
  const month = date.toLocaleString('en', { timeZone, month: 'long' }) + ' '
  const time = date.toLocaleString('en', {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
  })

  return (weekday + day + month + ' AT ' + time).toUpperCase()
}
