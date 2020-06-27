import React, { Component } from 'react';

class ColorPicker extends Component {
    constructor(props){
        super(props)
        this.state ={
            colors: ['red', 'green', 'blue', '#ccc']
        };
    }
    showColor = (color) =>{
        return {
            background: color
        }
    };
    setActiveColor = (color) => {
        this.props.onReceiveColor(color);
    }

    render(){
        var elmColors = this.state.colors.map((color, index) => {
            return  <span 
                        key={index} 
                        style={ this.showColor(color) }
                        className= { this.props.color === color ? 'active' : '' }
                        onClick= { () => {this.setActiveColor(color)} }
                    >
                    </span>
        });
        return(
            <div className="panel panel-primary" >
                    <div className="panel-heading">
                        <h3 className="panel-title">Color Picker</h3>
                    </div>
                    <div className="panel-body">
                        { elmColors }
                        <hr />
                    </div>
            </div>
        );
    }
}

export default ColorPicker;
