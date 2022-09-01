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
  }

  const onCheckboxClick = (name, checked) => {
    // TODO: implement checkbox click handler
  }

  const filterProducts = () => {
    // TODO: implement handler for filtering products by price range

    

  }
  let displayedProducts = products.map((products) => (JSON.parse(JSON.stringify(products))));
  let productsPrice = products.map((products) => (products.price));
  console.log(price)

  return (
    <div className="Products">
      <FilterForm
        setPrice={setPrice}
        priceFrom={price.priceFrom}
        priceTo={price.priceTo}
        onPriceInputChange={onPriceInputChange} />
      <ToggleColumns
        onCheckboxClick={''}
        columns={''} />

      <ProductList
        products={displayedProducts}
        columns={columns} />
    </div>
  );
}

export default Search;
