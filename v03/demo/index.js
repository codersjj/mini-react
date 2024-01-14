let taskId = 0
function workLoop(idleDeadline) {
  taskId++
  console.log(idleDeadline.timeRemaining())

  // 在每个空闲时间段内，执行一个任务，并检查是否需要让出空闲时间
  let shouldYield = false
  while (!shouldYield) {
    // run task
    console.log(`run task${taskId}`)

    // if (idleDeadline.timeRemaining() < 1) {
    //   shouldYield = true
    // }
    shouldYield = idleDeadline.timeRemaining() < 1
  }

  // 请求下一个空闲周期
  // 使用 requestIdleCallback 请求在下一次空闲时调用 workLoop 函数，以便继续模拟任务调度。
  requestIdleCallback(workLoop)
}

requestIdleCallback(workLoop)
