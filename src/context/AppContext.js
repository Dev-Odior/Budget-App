import React, { createContext, useEffect, useReducer, useState } from 'react'
import { reducer } from '../reducer'

const getLocalStorage = () => {
  let list = localStorage.getItem('list')

  if (list) {
    return JSON.parse(localStorage.getItem('list'))
  } else {
    list = []
  }
}

const defaultThing = {
  items: getLocalStorage(),
  formValues: { text: '', amount: '' },
  modalText: '',
  modalStatus: false,
  modalOkay: false,
}

export const AppContext = createContext({
  items: [],
  formValues: {},
  modalText: '',
  modalStatus: null,
  modalOkay: false,
  dispatcher: () => null,
})

export const AppContextProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, defaultThing)
  const { items, modalText, modalStatus, modalOkay, formValues } = state
  const [formInput, setFormInput] = useState(formValues)

  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(items))
  }, [items])

  useEffect(() => {
    dispatcher({ type: 'REAL_TIME_VALUE_CHECK', payLoad: formInput })
  }, [formInput])

  const value = {
    formValues,
    items,
    modalText,
    modalStatus,
    modalOkay,
    dispatcher,
  }
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
