import { useEffect } from 'react'

interface Props {
}

export const Child = (props: Props) => {
  useEffect(() => {
    return () => {
      console.log('Child组件销毁')
    }
  })
  return (
      <div>
        <h3>Child组件</h3>
      </div>
  )
}
