import { Button, Checkbox, Col, List, Row } from '@douyinfe/semi-ui'
import styles from './Main.module.scss'

interface Props {
  message: Array<{ id: string, msg: string, done: boolean }>
}

export const Main = (props: Props) => {
  console.log(props)
  return (
      <div>
        <List
            dataSource={props.message}
            renderItem={item =>
                <div className={styles.item}>
                  <Row>
                    <Col span={2}><Checkbox /></Col>
                    <Col span={20}>{item.msg}</Col>
                    <Col span={2}><Button theme="borderless">删除</Button></Col>
                  </Row>
                </div>
            }
        />
      </div>
  )
}
