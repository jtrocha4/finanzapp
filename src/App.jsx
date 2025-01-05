import { useContext } from 'react'
import './App.css'
import TableFixedExpenses from './components/TableFixedExpenses'
import Widget from './components/widget'
import { ExpensesContext } from './contexts/ExpensesContext'

function App () {
  const { expenses, setExpenses } = useContext(ExpensesContext)

  return (
    <>
      <section>
        <Widget description='Sueldo' value='1300000' />
        <Widget description='Sueldo Neto' value='' />
      </section>
      <section>
        <h2>Gastos fijos</h2>
        <TableFixedExpenses expenses={expenses} setExpenses={setExpenses} />
      </section>
    </>
  )
}

export default App
