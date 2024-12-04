import './App.css'
import ModalFixedExpenses from './components/ModalFixedExpenses'
import TableFixedExpenses from './components/TableFixedExpenses'
import Widget from './components/widget'

function App () {
  return (
    <>
      <section>
        <Widget description='Sueldo Neto' value={1300} />
      </section>
      <section>
        <h2>Gastos fijos</h2>
        <ModalFixedExpenses />
        <TableFixedExpenses />
      </section>
    </>
  )
}

export default App
