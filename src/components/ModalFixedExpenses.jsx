import { useEffect, useState } from 'react'

const ModalFixedExpenses = ({ expenses, setExpenses, edit, setEdit, expenseToEdit }) => {
  const [form, setForm] = useState({
    description: '',
    value: '',
    id: '',
    date: ''
  })

  const handleOnChange = (element) => {
    setForm({
      ...form,
      [element.target.name]: element.target.value,
      id: Date.now()
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
      value: '',
      date: ''
    })
  }

  const editExpensive = (event) => {
    event.preventDefault()

    const result = expenses.map(el => (
      (el.id === expenseToEdit.id) ? (form) : el
    ))

    setExpenses(result)

    setEdit(!edit)
    setForm({
      description: '',
      value: '',
      date: ''
    })
  }

  useEffect(() => {
    if (edit) {
      const { description, value, date } = expenseToEdit

      setForm({
        description,
        value,
        date
      })
    }
  }, [edit])

  return (
    <>
      <h3>
        {
          (edit) ? ('Editar gasto') : ('Añadir gasto')
        }
      </h3>
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
          <label htmlFor='value'>Fecha</label>
          <input type='date' name='date' id='date' onChange={handleOnChange} value={form.date} />
        </div>
        <div>
          <button onClick={(edit) ? (editExpensive) : (addExpensive)}>
            {
              (edit) ? ('Editar') : ('Añadir')
            }
          </button>
        </div>
      </form>
    </>
  )
}

export default ModalFixedExpenses
