import React, { useState } from 'react'

const Widget = ({ description, value, isEditable = false, editIncome }) => {
  const [isEdit, setIsEdit] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleInputChange = (e) => {
    setInputValue(e.target.value)
  }

  return (
    <>
      <h4>{description}</h4>
      {
        (isEdit)
          ? (<input value={inputValue} onChange={handleInputChange} />)
          : (<h3>{value}</h3>)
      }
      {
        (isEditable) && (<button onClick={() => editIncome(inputValue, isEdit, setIsEdit)}>Editar</button>)
      }

    </>
  )
}

export default Widget
