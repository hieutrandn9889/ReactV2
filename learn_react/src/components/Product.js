import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img alt="iphone 6" src="https://cdn.tgdd.vn/Products/Images/42/114115/iphone-x-64gb-hh-600x600.jpg" />
                        <div className="caption">
                            <h3>Iphone X</h3>
                            <p>
                                16.000.000 VND
                            </p>
                        </div>
                        <button type="button" className="btn btn-success">Mua Hàng</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
