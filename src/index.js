import x from './x.js'
import img from './assets/a1.png'
console.log("你好")

const div = document.getElementById('app')
console.log(div)
div.innerHTML = `
  <img src="${img}">
`