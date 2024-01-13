// 目标：在页面中呈现 app

// v0.2 使用 VDOM，VDOM 写死，DOM 渲染写死
// react -> VDOM -> JavaScript 对象
// type、props、children
// const app = {
//   type: 'div',
//   props: {
//     id: 'app',
//     children: [
//       {
//         type: 'TEXT_ELEMENT',
//         props: {
//           nodeValue: 'app',
//           children: []
//         }
//       }
//     ]
//   }
// }
const tNode = {
  type: 'TEXT_ELEMENT',
  props: {
    nodeValue: 'app',
    children: []
  }
}
const app = {
  type: 'div',
  props: {
    id: 'app',
    children: [tNode]
  }
}

const divEl = document.createElement(app.type)
divEl.id = app.props.id
const rootDiv = document.querySelector('#root')
rootDiv.append(divEl)

const textNode = document.createTextNode('')
textNode.nodeValue = tNode.props.nodeValue
// const textNode = document.createTextNode(tNode.props.nodeValue)
divEl.append(textNode)
