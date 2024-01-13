// 目标：在页面中呈现 app

// v0.3 使用 VDOM，VDOM 动态生成，DOM 渲染写死
// react -> VDOM -> JavaScript 对象
// type、props、children
const createTextNode = text => {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: []
    }
  }
}
const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children
    }
  }
}
const tNode = createTextNode('app')
const App = createElement('div', { id: 'app' }, tNode)

const divEl = document.createElement(App.type)
divEl.id = App.props.id
const rootDiv = document.querySelector('#root')
rootDiv.append(divEl)

const textNode = document.createTextNode('')
textNode.nodeValue = tNode.props.nodeValue
// const textNode = document.createTextNode(tNode.props.nodeValue)
divEl.append(textNode)
