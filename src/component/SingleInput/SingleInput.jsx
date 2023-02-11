import React from 'react'

const SingleInput = (props) => {
  const { label, value, onChangeHandler, type, name } = props

  return (
    <div className="form-group">
      <label>{label}</label>
      <input
        type={type}
        className="form-control"
        onChange={onChangeHandler}
        name={name}
        value={value}
      />
    </div>
  )
}

export default SingleInput
