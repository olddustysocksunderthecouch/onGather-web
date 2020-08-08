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

export const weekdayDayMonthFormatted = (
  date: Date,
  timeZone: string,
): string =>
  date.toLocaleString('en', { timeZone, weekday: 'long' }) +
  ', ' +
  date.toLocaleString('en', { timeZone, day: 'numeric' }) +
  ' ' +
  date.toLocaleString('en', { timeZone, month: 'long' })

export const timeFormatted = (
  date: Date,
  duration: string,
  timeZone: string,
): string => {
  const startTime = date
    .toLocaleString('en', {
      timeZone,
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    })
    .toLowerCase()

  const endDate = new Date(date.getTime() + parseInt(duration) * 60000)
  const endTime = endDate.toLocaleString('en', {
    timeZone,
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZoneName: 'short',
  })

  return startTime + ' - ' + endTime
}
