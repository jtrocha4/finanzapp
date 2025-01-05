import { useState, createContext } from 'react'

export const ExpensesContext = createContext()

export const ExpensesProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([])

  return (
    <ExpensesContext.Provider value={{
      expenses, setExpenses
    }}
    >
      {children}
    </ExpensesContext.Provider>
  )
}
