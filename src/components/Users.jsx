import React, { Component } from 'react';

export default class Users extends Component {
  
  state = {
    kategori: 
    [
    ]

  }
   componentDidMount(){
    this.getCategories();
  }
  getCategories = ()=> {
  fetch("http://localhost:3000/categories")
  .then(response =>response.json() )
  .then(data => this.setState({
    kategori : data
  }))

}
    
  render() {
    
    return (
      <div className='w-25'>
        <h4>{this.props.kategorid}</h4>
        <div className="list">
          <ul className='list-group text-center'>
          {
            this.state.kategori.map(kategori=> 
              <li key={kategori.id} className='pt-3 list-group-item' onClick={()=>this.props.click(kategori)}>{ kategori.categoryName }</li>
              )
          }  
           </ul>
        </div>
      </div>
    );
  }
}
