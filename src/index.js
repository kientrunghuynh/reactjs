import React from "react";
import ReactDOM from "react-dom";

function HelloWorldHeader(props) {
  return (
    <h1>
      Hello, {props.name}!
    </h1>
  );
}

class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      isToggleOn: true
    };
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick(){
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  };
  
  render() {    
    return (
      <div>
        <HelloWorldHeader name={this.props.name}/>
        <p>date: {this.state.date.toLocaleTimeString()}</p>
        <p>{this.state.message}</p>
        <p>
          <button onClick={this.handleClick}>
            {this.state.isToggleOn ? 'You like this. Click to toggle.' : 'You haven\'t liked this. Click to toggle.'}
          </button></p>
      </div>
    );
  }
}

ReactDOM.render(
  <HelloWorld name="Trung Huynh" />, 
  document.getElementById('root')
);