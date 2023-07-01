import React, { Component } from 'react';

export default class UserAdd extends Component {


  render() {


    return (
      <div className='w-75'>
        <h4>{this.props.kategorid}- {this.props.current}</h4>
        <table className='table w'>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Stok</th>
            </tr>
          </thead>
          <tbody>

            {
              this.props.products.map(kategori =>(
                <tr key={kategori.id}  >

                  <th scope="row">{kategori.id}</th>
                  <td>{kategori.productName}</td>
                  <td>{kategori.quantityPerUnit}</td>
                  <td>{kategori.unitPrice}</td>
                  <td>{kategori.unitsInStock}</td>

                </tr>
              ))
            }
 


          </tbody>
        </table>
      </div>
    );
  }
}
