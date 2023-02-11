import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Form from './Form/form'
import List from './List/List'
import Modal from './Modal/Modal'
import Total from './Total/Total'

const Display = () => {
  const { modalStatus, dispatcher } = useContext(AppContext)

  const clearButtonHandler = () => {
    dispatcher({ type: 'CLEAR_ALL' })
  }
  return (
    <>
      {modalStatus && <Modal />}

      <Form />
      <List />
      <div>
        <Total />
        <button className="btn clear-btn" onClick={clearButtonHandler}>
          Clear All
        </button>
      </div>
    </>
  )
}

export default Display
