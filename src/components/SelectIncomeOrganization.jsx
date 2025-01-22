import React, { useEffect, useState } from 'react'

const SelectIncomeOrganization = ({ sendSelection }) => {
  const [form, setForm] = useState({
    option: ''
  })

  // const budget = {
  //   '50/30/20': {
  //     categoria: {
  //       necesidades: {
  //         porcetaje: '50',
  //         categoria: 'Necesidades',
  //         descripcion: 'Gastos esenciales como vivienda, comida, servicios básicos, transporte, etc'
  //       },
  //       deseos: {
  //         porcetaje: '30',
  //         categoria: 'Deseos',
  //         descripcion: 'Entretenimiento, ocio, compras no esenciales, hobbies'
  //       },
  //       ahorros: {
  //         porcetaje: '20',
  //         categoria: 'Ahorro e Inversiones',
  //         descripcion: 'Ahorros, pagos de deudas, inversiones o fondo de emergencia'
  //       }
  //     }
  //   }
  // }

  const handleOnChange = (element) => {
    setForm({
      ...form,
      [element.target.name]: element.target.value
    })
  }

  const defaultMethod = (selectedMethod = '') => {
    const method = {
      '50/30/20': [
        {
          porcetaje: '50',
          categoria: 'Necesidades',
          descripcion: 'Gastos esenciales como vivienda, comida, servicios básicos, transporte, etc'
        },
        {
          porcetaje: '30',
          categoria: 'Deseos',
          descripcion: 'Entretenimiento, ocio, compras no esenciales, hobbies'
        },
        {
          porcetaje: '20',
          categoria: 'Ahorro e Inversiones',
          descripcion: 'Ahorros, pagos de deudas, inversiones o fondo de emergencia'
        }
      ],
      '60/20/20': [
        {
          porcetaje: '60',
          categoria: 'Necesidades',
          descripcion: 'Gastos esenciales como vivienda, comida, servicios básicos, transporte, etc'
        },
        {
          porcetaje: '20',
          categoria: 'Deseos',
          descripcion: 'Entretenimiento, ocio, compras no esenciales, hobbies'
        },
        {
          porcetaje: '20',
          categoria: 'Ahorro e Inversiones',
          descripcion: 'Ahorros, pagos de deudas, inversiones o fondo de emergencia'
        }
      ],
      '70/20/10': [
        {
          porcetaje: '70',
          categoria: 'Necesidades',
          descripcion: 'Gastos esenciales como vivienda, comida, servicios básicos, transporte, etc'
        },
        {
          porcetaje: '20',
          categoria: 'Deseos',
          descripcion: 'Entretenimiento, ocio, compras no esenciales, hobbies'
        },
        {
          porcetaje: '10',
          categoria: 'Ahorro e Inversiones',
          descripcion: 'Ahorros, pagos de deudas, inversiones o fondo de emergencia'
        }
      ]
    }
    if (method[selectedMethod] !== undefined) {
      // Enviar datos al componente padre (TableIncomeOrganization)
      sendSelection(method[selectedMethod])
    }
  }

  useEffect(() => {
    defaultMethod(form.option)
  }, [form])

  return (
    <>
      <select name='option' id='' onChange={handleOnChange}>
        <option value='null'>Seleccione una opcion</option>
        <option value='50/30/20'>50/30/20</option>
        <option value='60/20/20'>60/20/20</option>
        <option value='70/20/10'>70/20/10</option>
      </select>
    </>
  )
}

export default SelectIncomeOrganization
