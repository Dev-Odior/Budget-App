import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../../context/AppContext'
import { defaultValue } from '../../data'
import SingleInput from '../SingleInput/SingleInput'

const Form = () => {
  const { dispatcher, formValues } = useContext(AppContext)

  const { text, amount } = formValues

  const onChangeHandler = (e) => {
    const { value, name } = e.target
    dispatcher({ type: 'ON_CHANGE_HANDLER', payLoad: { value, name } })
  }

  const onSubmitHandler = (e) => {
    e.preventDefault()

    const { text, amount } = formValues

    if (text.trim() < 1) {
      dispatcher({ type: 'NO_INPUT' })
      return
    } else if (amount < 1) {
      dispatcher({ type: 'NO_AMOUNT' })
      return
    } else {
      dispatcher({ type: 'GET_DATA' })
    }
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <div className="form-center">
        <SingleInput
          type="text"
          value={text}
          name="text"
          onChangeHandler={onChangeHandler}
          label="Budget Name"
        />
        <SingleInput
          type="number"
          value={amount}
          name="amount"
          onChangeHandler={onChangeHandler}
          label="Budget Amount"
        />
      </div>

      <button className="btn">Submit</button>
    </form>
  )
}

export default Form
