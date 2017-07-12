export function formatDay(date) {
  const d = new Date(date)
  return getDayWord(d.getDay())
}

export function formatDate(date) {
  const d = new Date(date)

  return `${d.getDate()} ${getMonthWord(d.getMonth())} ${d.getFullYear()}`
}

export function getMonthWord(month) {
  const months = {
    0: 'Jan',
    1: 'Feb',
    2: 'Mar',
    3: 'Apr',
    4: 'May',
    5: 'Jun',
    6: 'Jul',
    7: 'Aug',
    8: 'Sep',
    9: 'Oct',
    10: 'Nov',
    11: 'Dec'
  }
  return months[month]
}

export function getDayWord(day) {
  const days = {
    0: 'Sunday',
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
  }
  return days[day]
}
