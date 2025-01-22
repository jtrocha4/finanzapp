import { useState, createContext } from 'react'

export const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])
  const [totalFixedExpenses, setTotalFixedExpenses] = useState(0)

  return (
    <ExpensesContext.Provider value={{
      expenses,
      setExpenses,
      totalFixedExpenses,
      setTotalFixedExpenses
    }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}
