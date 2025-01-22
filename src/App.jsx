import { useContext, useEffect, useState } from 'react'
import './App.css'
import TableFixedExpenses from './components/TableFixedExpenses'
import Widget from './components/widget'
import { ExpensesContext } from './contexts/ExpensesContext'
import TableIncomeOrganization from './components/TableIncomeOrganization'

function App () {
  const { expenses, setExpenses, totalFixedExpenses } = useContext(ExpensesContext)

  const [income, setIncome] = useState(1383000)
  const [netIncome, setNetIncome] = useState(0)

  const calculateNetIncome = (income = 0, totalFixedExpenses = 0) => {
    const total = income - totalFixedExpenses
    setNetIncome(total)
  }

  const editIncome = (newValue = 0, isEdit, setIsEdit) => {
    setIsEdit(!isEdit)
    setIncome(newValue)
    setIsEdit(!isEdit)
  }

  useEffect(() => {
    calculateNetIncome(income, totalFixedExpenses)
  }, [totalFixedExpenses, income])

  return (
    <>
      <section>
        <Widget description='Sueldo' value={income} isEditable editIncome={editIncome} />
        <Widget description='Sueldo Neto' value={netIncome} />
      </section>
      <section>
        <TableIncomeOrganization />
      </section>
      <section>
        <h2>Gastos fijos</h2>
        <TableFixedExpenses expenses={expenses} setExpenses={setExpenses} />
      </section>
    </>
  )
}

export default App
