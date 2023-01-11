import { Checkbox, Col, Input, Row } from '@douyinfe/semi-ui'
import { nanoid } from 'nanoid'

interface Props {
  addMsg: Function
}

export const Header = (props: Props) => {
  const enterHandel = (e: any) => {
    const info = {
      id: nanoid(6),
      msg: e.target.value,
      done: false
    }
    props.addMsg(info)
    e.target.value = ''
  }
  return (
      <div>
        <Row
            type={'flex'}
            align={'middle'}
            justify={'space-between'}
        >
          <Col span={2}>
            <Checkbox />
          </Col>
          <Col span={22}>
            <Input
                placeholder={'输入后按Enter'}
                onEnterPress={enterHandel}
            />
          </Col>
        </Row>
      </div>
  )
}
