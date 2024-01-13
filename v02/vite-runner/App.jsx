import React from './core/React.js'

function AppOne() {
  return <div>app</div>
}
console.log(AppOne)
// ƒ AppOne() {
//   return /* @__PURE__ */ React.createElement("div", null, "app");
// }

function AppTwo() {
  return <div id="app">app<span>哈哈哈</span></div>
}
console.log(AppTwo)
// ƒ AppTwo() {
//   return /* @__PURE__ */ React.createElement("div", { id: "app" }, "app", /* @__PURE__ */ React.createElement("span", null, "哈哈哈"));
// }

// 由上可见，碰到 jsx 的语法，vite 会帮我们编译成 React.createElement() 函数的调用

// const App = React.createElement('div', { id: 'app' }, 'app')
// 所以下面写成 jsx 的格式，vite 会去调用我们自己编写的 React.createElement() 函数
const App = <div>app</div>

export default App
