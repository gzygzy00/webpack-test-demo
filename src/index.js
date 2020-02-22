import x from './x.js'
import img from './assets/a1.png'

console.log("你好")

const div = document.getElementById('app')
console.log(div)
div.innerHTML = `
  <img src="${img}">
`

const button = document.createElement('button')
button.innerText = '懒加载'
div.appendChild(button)

button.onclick = () => {
  const promise = import('./lazy.js')
  promise.then((module) => {
    console.log("module")
    console.log(module)
    console.log('-------------')
    const fn = module.default
    fn()
  }, () => {
    console.log("失败")
  })
}