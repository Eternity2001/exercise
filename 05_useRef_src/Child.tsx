import { forwardRef, useImperativeHandle } from 'react'

// 函数组件传入ref会当作props处理，需要用forwardRef函数处理
export const Child = forwardRef((props, ref) => {
  // ref不可以直接获取到函数组件方法
  // 需要使用useImperativeHandle
  // 主动暴露
  useImperativeHandle(ref, () => ({
    childFn: fn
  }))
  const fn = (): void => {
    console.log('子组件方法')
  }
  return (
      <div>
        <h3>Child组件</h3>
      </div>
  )
})
