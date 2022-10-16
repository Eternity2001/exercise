import { UserContext, TestContext } from './App'
import { useContext } from 'react'

export const Child = () => {
  const user: string = useContext(TestContext)
  return (
      <div>
        <h1>{user}</h1>
        {/* Consumer 接收数据 */}
        <UserContext.Consumer>
          {
            value => (
                <h1>{value}</h1>
            )
          }
        </UserContext.Consumer>
      </div>
  )
}
