const today = new Date();

//mm-dd-aaaa
const formatarData = `${(today.getMonth()+1)}-${today.getDate()}-${today.getFullYear()}`
console.log(formatarData)