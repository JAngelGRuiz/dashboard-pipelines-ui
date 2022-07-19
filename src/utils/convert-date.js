export const transformDay = (day) => {
  switch (day) {
    case 0: return 'Sun'
    case 1: return 'Mon'
    case 2: return 'Tue'
    case 3: return 'Wed'
    case 4: return 'Thu'
    case 5: return 'Fri'
    default: return 'Sat'
  }
}

export const transformMonth = (day) => {
  switch (day) {
    case 0: return 'Jan'
    case 1: return 'Feb'
    case 2: return 'Mar'
    case 3: return 'Apr'
    case 4: return 'May'
    case 5: return 'Jun'
    case 6: return 'Jul'
    case 7: return 'Ago'
    case 8: return 'Sep'
    case 9: return 'Oct'
    case 10: return 'Nov'
    default: return 'Dec'
  }
}

export const buildDate = (date) => {
  return `${transformDay(date.getDay())} ${date.getDate()} ${transformMonth(date.getMonth())} ${date.getFullYear()}`
}
