import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Total = () => {
  const { items } = useContext(AppContext)
  return (
    <div className="total">
      <h4>Total:</h4>
      <p>
        $
        {items.reduce((acc, total) => {
          const { amount } = total
          let store
          const money = () => {
            return (store = parseInt(amount))
          }
          money()
          return (acc += store)
        }, 0)}
      </p>
    </div>
  )
}

export default Total
