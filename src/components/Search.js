import React, { useState } from 'react'
import products from "./products.json";
import '../App.css';
import { ToggleColumns } from './ToggleColumn';
import { ProductList } from './ProductList';
import { FilterForm } from './FilterForm';

export const Search = (props) => {
  const [price, setPrice] = useState({ priceFrom: '', priceTo: '' });

  const [columns, setColumns] = useState({
    id: true,
    name: true,
    department: true,
    price: true,
    currency: true,
  });

  const onPriceInputChange = (name, value) => {
    // TODO: implement price change handler
    setPrice((price) => ({...price, [name]: value}))
  }

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
    setColumns((columns) => ({...columns, [name]: !checked})); 
  }
  
  const filterProducts = (filtredArr) => {
    // TODO: implement handler for filtering products by price range
    return filtredArr = (price.priceFrom === "" && price.priceTo === "") ? products : products.filter(product => product.price >=(price.priceFrom === "" ? 0 : parseFloat(price.priceFrom)) && product.price <= (price.priceTo === "" ? 50000 : parseFloat(price.priceTo)));
    console.log(displayedProducts)
  }


  let displayedProducts = filterProducts(products);
 

  console.log(columns);

  return (
    <div className="Products">
      <FilterForm
        setPrice={setPrice}
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />
      <ToggleColumns
        onCheckboxClick={onCheckboxClick}
        columns={columns} />

      <ProductList
        products={displayedProducts}
        filterProducts={filterProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
