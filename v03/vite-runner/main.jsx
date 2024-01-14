// 目标：在页面中呈现 app

import React from './core/React.js'
import ReactDOM from "./core/ReactDOM.js"
import App from './App.jsx'

console.log("🚀 ~ App:", App)

ReactDOM.createRoot(document.querySelector('#root')).render(App)
// ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
