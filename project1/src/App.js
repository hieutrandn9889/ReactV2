import React, { Component } from 'react';
import './App.css';
import Result from './components/Result';
import Reset from './components/Reset';
import ColorPicker from './components/ColorPicker';
import SizeSetting from './components/SizeSetting';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 15
    };
  }
  onSetColor = (params) => {
    this.setState ({
      color: params
    })

  }

  render(){
    return(
      <div>
        <div className="container mt-50">
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <ColorPicker color={ this.state.color } onReceiveColor={this.onSetColor} />
            </div>
            
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <SizeSetting/>
              <Reset/>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <Result color= { this.state.color }/>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
