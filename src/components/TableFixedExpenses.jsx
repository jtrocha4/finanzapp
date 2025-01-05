import React, { useEffect, useState } from 'react'
import ModalFixedExpenses from './ModalFixedExpenses'

const TableFixedExpenses = ({ expenses, setExpenses }) => {
  const [edit, setEdit] = useState(false)
  const [expenseToEdit, setExpenseToEdit] = useState([])
  const [total, setTotal] = useState(0)

  const deleteExpensive = (expenseId) => {
    const result = expenses.filter(({ id }) => id !== expenseId)
    setExpenses(result)
  }

  const getExpensive = (expenseId) => {
    const result = expenses.find(({ id }) => id === expenseId)
    setEdit(!edit)
    setExpenseToEdit(result)
  }

  const calculateExpenses = (expenses) => {
    let total = 0
    expenses.forEach(({ value }) => {
      setTotal(total += Number(value))
    })

    console.log(total)
  }

  useEffect(() => {
    calculateExpenses(expenses)
  }, [expenses])

  return (
    <>
      <ModalFixedExpenses expenses={expenses} setExpenses={setExpenses} edit={edit} setEdit={setEdit} expenseToEdit={expenseToEdit} />
      <h3>Gastos fijos</h3>
      <table>
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Fecha</th>
            <th>Valor</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.map(({ id, date, description, value }) => (
              <tr key={id}>
                <td>{description}</td>
                <td>{date}</td>
                <td>{value}</td>
                <td>
                  <button onClick={() => getExpensive(id)}>Editar</button>
                  <button onClick={() => deleteExpensive(id)}>Eliminar</button>
                </td>
              </tr>
            ))
          }
          <tr>
            <td colSpan={2}>
              Total
            </td>
            <td>{total}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableFixedExpenses
