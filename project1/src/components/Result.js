import React, { Component } from 'react';

class Result extends Component {

    setStyle = () => {
        return{
            color: this.props.color
        }
    }

    render(){
        return(
            <div>
                <p>
                Color: Red - Fontsize: 15px
                </p>
                <div id="content" style={this.setStyle()}>
                Nội Dung Setting
                </div>
            </div>
        );
    }
}

export default Result;
