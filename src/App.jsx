import { useEffect, useState } from 'react'
import './App.css'
import ModalFixedExpenses from './components/ModalFixedExpenses'
import TableFixedExpenses from './components/TableFixedExpenses'
import Widget from './components/widget'

function App () {
  const [salary, setSalary] = useState(1300)
  const [netSalary, setNetSalary] = useState(0)
  const [fixedExpenses, setFixedExpenses] = useState([])

  // const expenses = [{
  //   id: 1,
  //   description: 'Transporte',
  //   value: 90
  // }]

  const calculateNetSalary = (salary, expenses) => {
    let totalExpenses = 0

    expenses.map(({ value }) => {
      totalExpenses = totalExpenses + value
    })
    console.log(totalExpenses)
    const netSalary = salary - totalExpenses
    setNetSalary(netSalary)
  }

  useEffect(() => {
    calculateNetSalary(salary, fixedExpenses)
  }, [fixedExpenses])

  return (
    <>
      <section>
        <Widget description='Sueldo' value={salary} />
        <Widget description='Sueldo Neto' value={netSalary} />
      </section>
      <section>
        <h2>Gastos fijos</h2>
        <ModalFixedExpenses setExpenses={setFixedExpenses} expenses={fixedExpenses} />
        <TableFixedExpenses tableName='Gastos Fijos' expenses={fixedExpenses} />
      </section>
    </>
  )
}

export default App
