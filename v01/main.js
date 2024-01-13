// 目标：在页面中呈现 app

// v0.4 使用 VDOM，VDOM 动态生成，DOM 动态渲染
// react -> VDOM -> JavaScript 对象
// type、props、children
//#region -------------------- 动态生成 VDOM --------------------
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
      children: children.map(child => {
        return typeof child === 'string'
          ? createTextNode(child)
          : child
      })
    }
  }
}
// const tNode = createTextNode('app')
const App = createElement('div', { id: 'app' }, 'app')
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

function render(el, container) {
  const element = el.type === 'TEXT_ELEMENT'
    ? document.createTextNode('')
    : document.createElement(el.type)

  // id, class, ...
  Object.keys(el.props).forEach(prop => {
    if (prop !== 'children') {
      element[prop] = el.props[prop]
    }
  })

  el.props.children.forEach(child => {
    // 递归
    render(child, element)
  })

  container.append(element)
}

render(App, document.querySelector('#root'))
//#endregion -------------------- 动态渲染 DOM --------------------
