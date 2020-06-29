### Review:

1. Truyen cha sang con

App.js:

 constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
  };
render(){
    return(
  <Result 
    color= { this.state.color } 
    fontSize={this.state.fontSize}
  />)}

Result.js:

render(){
        return(
            <div>
                <p>
                Color: {this.props.color} - Fontsize: {this.props.fontSize} px
                </p>
            </div>
        );}

2. Truyen con sang cha

Reset.js:

onResetDefault = () => { 
        this.props.onSettingDefault(true)
    }

render(){
    return(
        <button type="button" className="btn btn-primary" onClick= {this.onResetDefault}>Reset</button>
    );
}

App.js:

constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
  };
 onSettingDefault = (value) =>{
    if(value){
      this.setState({
        color: 'red',
        fontSize: 12
      });
    }
  }
render(){
        return(
            <div>
                <p>
               <Reset onSettingDefault={this.onSettingDefault}/>
                </p>
            </div>
        );}
3. Show list state va hung tu cha truyen con

ColorPicker.js

constructor(props){
    super(props)
    this.state ={
        colors: ['red', 'green', 'blue', '#ccc']
    };
}
render(){
        var elmColors = this.state.colors.map((color, index) => {
            return  <span 
                        key={index} 
                        style={ this.showColor(color) }
                        className= { this.props.color === color ? 'active' : '' }  >> hung tu cha truyen con 
                        onClick= { () => {this.setActiveColor(color)} }
                    >
                    </span>
        });
App.js:

 constructor(props){
    super(props);
    this.state = {
      color: 'red',
      fontSize: 12
    };
  };
render(){
    return(
  <ColorPicker 
    color={ this.state.color } 
    onReceiveColor={this.onSetColor} 
  />



  abc
