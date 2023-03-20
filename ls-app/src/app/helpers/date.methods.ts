export function compare(a:Date) {
  if(new Date(a).getMonth() === new Date().getMonth() && 
    new Date(a).getFullYear() === new Date().getFullYear()) {
      return true
    }
  else return false
}