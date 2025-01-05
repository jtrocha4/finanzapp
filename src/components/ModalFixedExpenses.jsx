import React, { useState } from 'react'

const ModalFixedExpenses = ({ setExpenses, expenses }) => {
  const [form, setForm] = useState({
    description: '',
    value: ''
  })

  const handleOnChange = (element) => {
    setForm({
      ...form,
      [element.target.name]: element.target.value
    })
  }

  const addExpensive = (event) => {
    event.preventDefault()
    const { description, value } = form

    if (!description || !value) {
      return console.log('Por favor diligencie el formulario')
    }

    setExpenses([...expenses, form])
    setForm({
      description: '',
      value: ''
    })
  }

  return (
    <>
      <h3>Añadir gasto</h3>
      <form action=''>
        <div>
          <label htmlFor='description'>Descripcion</label>
          <input type='text' name='description' id='description' onChange={handleOnChange} value={form.description} />
        </div>
        <div>
          <label htmlFor='value'>Valor</label>
          <input type='number' name='value' id='value' onChange={handleOnChange} value={form.value} />
        </div>
        <div>
          <button onClick={addExpensive}>Añadir</button>
        </div>
      </form>
    </>
  )
}

export default ModalFixedExpenses
