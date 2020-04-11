function formatNumber (n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}

export function formatTime (date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}

export function showSuccess (text, d = 2000) {
  mpvue.showToast({
    title: text,
    icon: 'success',
    duration: d
  })
}

export function showToast (text, d = 2000) {
  mpvue.showToast({
    title: text,
    icon: 'none',
    duration: d
  })
}

export function showError (text, d = 2000) {
  mpvue.showToast({
    title: text,
    icon: 'error',
    duration: d
  })
}

export default {
  formatNumber,
  formatTime,
  showSuccess,
  showToast,
  showError
}
