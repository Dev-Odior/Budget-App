import { defaultValue } from './data'

export const reducer = (state, action) => {
  const { items, formValues } = state
  const { type, payLoad } = action

  if (type === 'CLEAR_ALL') {
    const empty = []
    return { ...state, items: empty }
  }

  if (type === 'FORM_INPUT_CHANGE') {
    const { name, value } = payLoad
    console.log('working')
    return { ...state }
  }

  if (type === 'GET_DATA') {
    const updateItem = { ...formValues, id: new Date().getTime().toString() }
    return {
      ...state,
      modalStatus: true,
      modalOkay: true,
      modalText: 'Item added successfully',
      items: [...items, updateItem],
      formValues: defaultValue,
    }
  }

  if (type === 'NO_INPUT') {
    return {
      ...state,
      modalStatus: true,
      modalText: 'You have no input!!!',
      modalOkay: false,
    }
  }

  if (type === 'NO_AMOUNT') {
    return {
      ...state,
      modalStatus: true,
      modalText: "You don't seem to have an amount!!!",
      modalOkay: false,
    }
  }

  if (type === 'REMOVE_MODAL') {
    return { ...state, modalStatus: false }
  }

  if (type === 'REMOVE_ITEM') {
    const update = items.filter((item) => item.id !== payLoad)
    console.log(update)

    return {
      ...state,
      items: update,
      modalStatus: true,
      modalText: 'You deleted an item !!!',
    }
  }

  if (type === 'ON_CHANGE_HANDLER') {
    const { name, value } = payLoad
    return { ...state, formValues: { ...formValues, [name]: value } }
  }

  if (type === 'REAL_TIME_VALUE_CHECK') {
    console.log('value being checked')
    return { ...state, formValues: payLoad }
  }

  if (type === 'EDIT') {
    const { id, text, amount } = payLoad
    const newItem = items.filter((item) => item.id !== id)
    return { ...state, formValues: { text: text, amount: amount }, items: newItem }
  }
}
