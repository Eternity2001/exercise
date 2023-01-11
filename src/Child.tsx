import { Children } from 'react'

interface Props {
  name?: string,
  age?: number,
  Header?: JSX.Element
}

const Child = (props: Props) => {
  console.log(Children)
  return (
      <div>
        {props.Header}
      </div>
  )
}
Child.defaultProps = {
  age: '两年半',
  name: '苏制66榴',
  Header: <h1>唱跳rap篮球、music</h1>
}
export default Child
