import React, { Component } from 'react';

class Product extends Component {
    // constructor(props){
    //     super(props);
    //     this.onCancelTocard = this.onCancelTocard.bind(this);
    // }

    // onCancelTocard
    onCancelTocard = () => {
        alert( this.props.name + ' - ' + this.props.price)
    }

    // onAddToCard
    onAddToCard = (text) => {
        alert(text + ' - ' +  this.props.name + ' - ' + this.props.price)
    }

    // onAddToCard
    onAddToSubmit(){
        alert("text")
    }

    render() {
        return (
            <div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="thumbnail">
                        <img alt={this.props.name} src={this.props.image} />
                        <div className="caption">
                            <h3>{this.props.children}</h3>
                            <h3>{this.props.name}</h3>
                            <p>
                                {this.props.price} VND
                            </p>
                        </div>
                        <button type="button" className="btn btn-primary" onClick={ this.onCancelTocard }>Cancel</button>
                        <button type="button" className="btn btn-primary" onClick={ () => this.onAddToCard('test')}>Mua Hàng</button>
                        <button type="button" className="btn btn-primary" onClick={ this.onAddToSubmit}>Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
