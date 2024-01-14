const divEl = document.createElement('div')
divEl.innerText = '哈哈哈'
document.body.append(divEl)

let i = 0
// 因为 JavaScript 是单线程的，当执行循环时，主线程会一直忙于执行循环操作，如果 JavaScript 执行时间过长，可能会导致 GUI 渲染的阻塞。在浏览器中，渲染是异步的，而不是立即执行的。
while (i < 10000000000) {
  i++
}