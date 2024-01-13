// 目标：在页面中呈现 app

// v0.1 不用 VDOM，DOM 渲染写死
const divEl = document.createElement('div')
const rootDiv = document.querySelector('#root')
rootDiv.append(divEl)

const textNode = document.createTextNode('')
textNode.nodeValue = 'app'
// const textNode = document.createTextNode('app')
divEl.append(textNode)
