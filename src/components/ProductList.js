import React from 'react'

export const ProductList = (props) => {
  // TODO: display appropriate header
  // TODO: display only chosen columns
  // TODO: display products as new table rows
  return (
    <div id="product-list">
      <header>
        <strong>Product List ({props.products.length})</strong>
      </header>
      <table>
        <thead>
          <tr>
            <th className={props.columns.id ? "" : "desappearing"}>ID</th>
            <th className={props.columns.name ? "" : "desappearing"}>Name</th>
            <th className={props.columns.department ? "" : "desappearing"}>Department</th>
            <th className={props.columns.price ? "" : "desappearing"}>Price $</th>
          </tr>
            
        </thead>
        <tbody>
        {props.products.map((products) =>  
              {return (
                <tr key={products.id}>
                  <td className={props.columns.id ? "" : "desappearing"}>{products.id}</td>
                  <td className={props.columns.name ? "" : "desappearing"}>{products.name}</td>
                  <td className={props.columns.department ? "" : "desappearing"}>{products.department}</td>
                  <td className={props.columns.price ? "" : "desappearing"}>${products.price}</td>
                </tr>
              )}
            )}
        </tbody>
      </table>
    </div>
  )
}
