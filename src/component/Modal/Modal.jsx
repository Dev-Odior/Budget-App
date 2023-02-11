import { useContext, useEffect } from 'react'
import { AppContext } from '../../context/AppContext'

const Modal = () => {
  const { modalText, dispatcher, modalOkay } = useContext(AppContext)

  useEffect(() => {
    setTimeout(() => {
      dispatcher({ type: 'REMOVE_MODAL' })
    }, 2000)
  }, [])

  return <h4 className={`alert ${modalOkay ? 'alert-success ' : 'alert-danger'}`}>{modalText}</h4>
}

export default Modal
