export function compare(a:Date) {
  if(new Date(a).getMonth() === new Date().getMonth() && 
    new Date(a).getFullYear() === new Date().getFullYear()) {
      return true
    }
  else return false
}

export function getDays(date) {
  console.log(date)

  let date1 = new Date(date).getTime()
  console.log(date1)
  let dateNow = new Date().getTime()
  console.log(dateNow)

  let difTime = date1 - dateNow
  console.log(difTime)

  let difDays = Math.round(difTime/(24*60*60*1000))
  console.log(difDays)

  return difDays
}