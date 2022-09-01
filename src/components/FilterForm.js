import React from 'react'

export const FilterForm = (props) => {

  const onPriceInputChange = (e, name) => {
    // TODO: implement handler
    props.setPrice(price => ({...price, [e.target.name]: e.target.value}))
    

  }


  // TODO: bind handlers and props
  return (
    <div>
      <label htmlFor="priceFrom">Price From:</label>
      <input
        type="number"
        id="priceFrom"
        name="priceFrom"
        onChange={onPriceInputChange}
        placeholder="Price from..." />
      <label htmlFor="priceTo">Price To:</label>
      <input
        type="number"
        id="priceTo"
        name="priceTo"
        onChange={onPriceInputChange}
        placeholder="Price to..." />
    </div>
  )
}
