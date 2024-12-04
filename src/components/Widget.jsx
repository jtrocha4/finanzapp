import React from 'react'

const Widget = ({ description, value }) => {
  return (
    <>
      <h4>{description}</h4>
      <h3>{value}</h3>
    </>
  )
}

export default Widget
