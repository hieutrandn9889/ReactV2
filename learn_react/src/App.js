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

  render() {
    var a = 5;
    var product = {
      id: 1,
      name: "iphone",
      status: true
    }

    return (
      <div>
        <Header />

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product />
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

      </div>
    )
  }
}

export default App;
