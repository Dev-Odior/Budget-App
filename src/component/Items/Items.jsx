import { useContext } from 'react'
import { AppContext } from '../../context/AppContext'

const Items = ({ data }) => {
  const { text, amount, id } = data
  const { dispatcher } = useContext(AppContext)

  const onEditHandler = () => {
    dispatcher({ type: 'EDIT', payLoad: { id, text, amount } })
  }

  const onClickHandler = () => {
    console.log(id, 'for the id')
    dispatcher({ type: 'REMOVE_ITEM', payLoad: id })
  }
  return (
    <>
      <li className="item">
        <div className="info">
          <p className="expense">{text}</p>
          <p className="amount">${amount}</p>
        </div>
        <p className="edit" onClick={onEditHandler}>
          EDIT
        </p>
        <h3 className="x" onClick={onClickHandler}>
          X
        </h3>
      </li>
    </>
  )
}

export default Items
