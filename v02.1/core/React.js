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

const React = {
  createElement,
  render
}

export default React
