import styles from './list.module.scss'
import { List } from '@douyinfe/semi-ui'

interface Props {
  msgItem: { id: string, msg: string, done: boolean }
}

export const Item = (props: Props) => {
  console.log(props)
  return (
      <>
        {props.msgItem.msg}
      </>
  )
}
