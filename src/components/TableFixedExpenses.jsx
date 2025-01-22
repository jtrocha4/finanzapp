import React, { useContext, useEffect, useState } from 'react'
import ModalFixedExpenses from './ModalFixedExpenses'
import { ExpensesContext } from '../contexts/ExpensesContext'

const TableFixedExpenses = ({ expenses, setExpenses, salary, netSalary, setNetSalary }) => {
  const [edit, setEdit] = useState(false)
  const [expenseToEdit, setExpenseToEdit] = useState([])

  const { totalFixedExpenses, setTotalFixedExpenses } = useContext(ExpensesContext)

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
      setTotalFixedExpenses(total += Number(value))
    })
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
            <td>{totalFixedExpenses}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default TableFixedExpenses
