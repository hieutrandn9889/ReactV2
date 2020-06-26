import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Product from './components/Product'

class App extends Component {
  
  // state and element4
  constructor(props){
    super(props);
    this.state = {
      sanPhams : [
        {
          id: 1,
          name: "iphone state",
          image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
          price: 10000,
          status: true
        },
        {
          id: 2,
          name: "iphone 11 state",
          image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
          price: 10000,
          status: true
        },
      ],
      isActive : false
    }
  };

  // onSetState
  onSetState = () => {
    // if(this.state.isActive === true){
    //   this.setState({
    //     isActive : false
    //   });
    // }
    // else{
    //   this.setState({
    //     isActive : true
    //   });
    // }
    
    // this.setState({
    //   isActive: !this.state.isActive
    // })
 
    const {isActive} = this.state
    this.setState({
      isActive: !isActive
    })
  }

  //addProduct >> refs
  addProduct = () =>{
    console.log(this.refs.name.value)
  }

  showInforProduct = (product) => {
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
  showInforUser = (user, index) => {
    return <div key={index}>
      <h2>Ten: {user.name} </h2>
      <h2>Tuoi: {user.age}</h2>
    </div>
  }

  // k truyền prama
  onClick(){
    alert("Test")
  }

  render() {
    var a = 5;
    var product = {
      id: 1,
      name: "iphoneHieu",
      status: true
    }

    // element1
    var users = [
      {
        id: 1,
        name: "hieu",
        age: 20
      }
    ];
    // element1
    var element1 = users.map((user, index) => {
      return this.showInforUser(user, index)
    });

    // element2
    var element2 = users.map((user) => {
      return <div key={user.id}>
        <h1>Ten: {user.name} </h1>
        <h1>Tuoi: {user.age}</h1>
      </div>
    });

    // element3
    var products = [
      {
        id: 1,
        name: "iphone xxxxxxxxxxxx",
        image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
        price: 10000,
        status: true
      },
      {
        id: 2,
        name: "iphone 11x",
        image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
        price: 10000,
        status: true
      },
      {
        id: 3,
        name: "iphone 11 prox",
        image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
        price: 10000,
        status: true
      },
      {
        id: 4,
        name: "iphone 12prox",
        image: "https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg",
        price: 200000,
        status: true
      }
    ]

    // element3
    var element3 = products.map((product, index) => {
      if (product.status) {
        return (
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" key={product.id}>
            <Product
              name={product.name}
              price={product.price}
              image={product.image}
            />
          </div>
        )
      }
      return null;
    });

     //state and element4
  let element4 = this.state.sanPhams.map((product, index) => {
    if(product.status){
      return <tr key={index}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.image}</td>
              <td>
                <span className= "label label-primary">{product.price} VND</span>
                
              
              </td>
             </tr>
    }
    return null;

  });

    return (
      <div>
          <Header />

          {/* Them san pham */}
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <div className="panel panel-default">
              <div className="panel-body">
                 Thêm Sản Phẩm
              </div>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" ref="name"></input>
            </div>
            <button type="submit" className="btn btn-primary" onClick={ this.addProduct }>Submit</button>
          </div>

        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product
              image="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
              name="iphone X"
              price="1000"
            />
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product
              image="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
              name="iphone 10"
              price="100000"
            />
          </div>

          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Product
              image="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg"
              price="1000"
            >
              iphone X
              </Product>
          </div>

        </div>

        {element3}

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
          { () => this.showInforProduct(product)}
        </div>

        {element1}

        {element2}
        <div>
          <button type="button" className="btn btn-success" onClick={this.onClick}>Click Me!</button>
        </div>

        <table className="table table-bordered table-hover">
          <thead>
            <tr>
              <th>No</th>
              <th>Production</th>
              <th>Image</th>
              <th>Prices</th>
            </tr>
          </thead>
          <tbody>
            {element4}
          </tbody>
        </table>
        <button type="button" className="btn btn-success" onClick={ () => this.onSetState() }>
          Active: { this.state.isActive === true ? "true" : "false"} 
        </button>
      </div>
    )
  }
}

export default App;
