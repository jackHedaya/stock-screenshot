module.exports = () => {
  const date = new Date();
  return `${date.getHours() - 12}:${date.getMinutes()}:${date.getSeconds()}`
} 