import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext'
import Items from '../Items/Items'

const List = () => {
  const { items } = useContext(AppContext)
  return (
    <div className="list">
      <ul>
        {items.map((item) => {
          const { id } = item
          return <Items data={item} key={id} />
        })}
      </ul>
    </div>
  )
}

export default List
