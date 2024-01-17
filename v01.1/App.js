import React from './core/React.js'

const App = React.createElement('div', { id: 'app' }, 'app')
// 有了单测，以后就可以不用再在代码中打印信息进行检查了。有关代码逻辑如果有变动，单测那边就能立即反应出来
// console.log("🚀 ~ App:", App)

export default App
