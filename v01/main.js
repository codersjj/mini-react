// 目标：在页面中呈现 app

import ReactDOM from "./core/ReactDOM.js"
import App from './App.js'

// v0.4 使用 VDOM，VDOM 动态生成，DOM 动态渲染
// react -> VDOM -> JavaScript 对象
// type、props、children
//#region -------------------- 动态生成 VDOM --------------------

// const tNode = createTextNode('app')
// const App = React.createElement('div', { id: 'app' }, 'app')
// const App = createElement('div', { id: 'app' }, 'hi-', 'mini-react')
// console.log(App)
//#endregion -------------------- 动态生成 VDOM --------------------

//#region -------------------- 动态渲染 DOM --------------------
// const divEl = document.createElement(App.type)
// divEl.id = App.props.id
// document.querySelector('#root').append(divEl)

// const textNode = document.createTextNode('')
// textNode.nodeValue = tNode.props.nodeValue
// divEl.append(textNode)

// render(App, document.querySelector('#root'))

ReactDOM.createRoot(document.querySelector('#root')).render(App)
//#endregion -------------------- 动态渲染 DOM --------------------
