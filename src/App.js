import React, { Component } from 'react';
import UserAdd from './components/UserAdd';
import Users from './components/Users';
import './App.css';

export default class App extends Component {
state = {
  current : "",
  products: []
}

componentDidMount(){
  this.getProduct();
}

getProduct = (id)=> {
  let url = "http://localhost:3000/products?categoryId=" + id;
 

  fetch(url)
  .then(response =>response.json() )
  .then(data => this.setState({
    products: data
  }))

}
 
 
  click = (kategori ) => {
    this.setState({
      current: kategori.categoryName
    })
    this.getProduct(kategori.id)
  }



  render() {
    const  kategori  = { title: "Kategori", title1: "product" }

    return (
      <div className="container w-75 m-auto">
        <h1 className='text-center'>My-Apps</h1>
        <div className=' d-flex justify-content-start align-item-center'>
         
          <Users current ={this.state.current} kategorid={kategori.title1} click={this.click}/>
          <UserAdd current ={this.state.current} kategorid={kategori.title} products = {this.state.products} /></div> 
      </div>
    );
  }
}
