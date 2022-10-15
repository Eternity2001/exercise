import { Button } from '@douyinfe/semi-ui'

interface Props {
  className?: string,
  name: string
  newName: Function
}

export const Son = (props: Props) => {
  console.log(props)
  const changeName = () => {
    console.log(666)
    props.newName('张若尘')
  }
  return (
      <div className={props.className}>
        <h1>Son组件{props.name}</h1>
        <Button onClick={changeName}>改名字</Button>
      </div>
  )
}
