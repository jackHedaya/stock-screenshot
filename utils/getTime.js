function formatHours(date) {
  const h = date.getHours()
  return h > 12 ? h - 12 : h;
}

module.exports = () => {
  const date = new Date();
  return `${formatHours(date)}:${date.getMinutes()}:${date.getSeconds()}`
} 