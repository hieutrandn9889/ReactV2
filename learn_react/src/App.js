import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {

  showInforProduct(product) {
    if (product.status) {
      return <h3>
        ID:   {product.id}
        <br />
                  Name: {product.name}
        <br />
                  Status: {product.status ? "Active" : "Pending"}
      </h3>
    }
  }
  showInforUser(user, index){
    return <div key={index}>
              <h2>Ten: {user.name} </h2>
              <h2>Tuoi: {user.age}</h2>
           </div>
  }

  render() {
    var a = 5;
    var product = {
      id: 1,
      name: "iphone",
      status: true
    }

    var users = [
      {
        id: 1,
        name: "hieu",
        age: 20
      },
      {
        id: 2,
        name: "huyen",
        age: 30
      }
    ];
    var element1 = users.map((user, index) => {
      return  this.showInforUser(user, index)
    });

    var element2 = users.map((user) => {
      return   <div key={user.id}>
                  <h1>Ten: {user.name} </h1>
                  <h1>Tuoi: {user.age}</h1>
              </div>
    });

    return (
      <div>
        <Header />

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product 
              image="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
              name ="iphone X"
              price = "1000"
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product 
              image="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
              name ="iphone 10"
              price = "100000"
            />
          </div>
        </div>

        <div className="ml-30">
          <h3>
            a: {a}
            <br />
            ID:   {product.id},
            <br />
            Name: {product.name}
            <br />
            Status: {product.status ? "Active" : "Pending"}
          </h3>
        </div>

        <div className="ml-30">
          {this.showInforProduct(product)}
        </div>

        {element1}

        {element2}
      </div>
    )
  }
}

export default App;
