import React from 'react'

const TableFixedExpenses = ({ tableName, expenses }) => {
  return (
    <>
      <h3>{tableName}</h3>
      <table>
        <thead>
          <tr>
            <th>Descripcion</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {
          expenses.map(({ key, description, value }) => (
            <tr key={key}>
              <td>{description}</td>
              <td>{value}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </>
  )
}

export default TableFixedExpenses
