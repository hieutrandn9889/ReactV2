import React, { Component } from 'react';

class Product extends Component {
    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img alt={this.props.name} src={this.props.image} />
                        <div className="caption">
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price} VND
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
