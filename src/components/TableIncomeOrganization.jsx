import React, { useState } from 'react'
import SelectIncomeOrganization from './SelectIncomeOrganization'

const TableIncomeOrganization = () => {
  const [selectedMethod, setSelectedMethod] = useState([])

  // Recibir datos del componente hijo (SelectIncomeOrganization)
  const receiveMethod = (data) => {
    setSelectedMethod(data)
  }

  return (
    <>
      <h3>Distribucion de los ingresos</h3>
      <SelectIncomeOrganization sendSelection={receiveMethod} />
      <table>
        <thead>
          <tr>
            <th>Porcentaje</th>
            <th>Descripcion</th>
            <th>Ingresos destinados</th>
          </tr>
        </thead>
        <tbody>
          {
            selectedMethod.map((el, index) => (
              <tr key={index}>
                <td>{el.porcetaje}</td>
                <td>{el.descripcion}</td>
                <td>limite</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </>
  )
}

export default TableIncomeOrganization
