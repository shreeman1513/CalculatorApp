import React,{ Component } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      input: "",
      previousNumber: "",
      currentOperator: "",
      operator: ""
    }

  }
  addtoInput = val => {
    this.setState({ input: this.state.input + val })
  }

  addZerotoInput = val => {
    // if this.state.input is not empty then add zero 
    if (this.state.input !== ""){
        this.setState({ input: this.state.input + val })
    }
  }

  addDecimal = val=> {
    //only add decimal if there is no current decimal point present in the input area
    if(this.state.input.indexOf(".") ===-1){
      this.setState({ input: this.state.input + val})
    }
  }

  add = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "plus";
  }

  minus = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "minus";
  }

  multiply = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "multiply";
  }
  divide = () => {
    this.state.previousNumber = this.state.input;
    this.setState({input: ""});
    this.state.operator = "divide";
  }

  clearInput = () => {
    this.setState({input:""})
  }

  evaluate =() => {
    this.state.currentNumber = this.state.input;
    if(this.state.operator =="plus"){
      this.setState({
        input: parseInt(this.state.previousNumber) + parseInt(this.state.currentNumber)
      });
    }else if(this.state.operator == "minus"){
      this.setState ({
        input:parseInt(this.state.previousNumber) - parseInt(this.state.currentNumber)
      });
    }else if(this.state.operator == "multiply"){
      this.setState ({
        input:parseInt(this.state.previousNumber)*parseInt(this.state.currentNumber)
      });
    }else if(this.state.operator == "divide"){
      this.setState ({
        input:parseInt(this.state.previousNumber)/ parseInt(this.state.currentNumber)
      })
    }
  };

  render() {
  return (
    <div className="App">
    <div className="calc-wrapper">
      <header>Calulator by Shreeman Gupta</header>
      <div className="row">
        <Input>{this.state.input}</Input> 
      </div>
      <div className="row">
        <Button  handleClick={this.addtoInput}>7</Button>
        <Button handleClick={this.addtoInput}>8</Button>
        <Button handleClick={this.addtoInput}>9</Button>
        <Button handleClick={this.divide}>/</Button>
      </div>
      <div className="row">
        <Button handleClick={this.addtoInput}>4</Button>
        <Button handleClick={this.addtoInput}>5</Button>
        <Button handleClick={this.addtoInput}>6</Button>
        <Button handleClick={this.multiply}>*</Button>
      </div>
      <div className="row">
        <Button handleClick={this.addtoInput}>1</Button>
        <Button handleClick={this.addtoInput}>2</Button>
        <Button handleClick={this.addtoInput}>3</Button>
        <Button handleClick ={this.minus}>-</Button>
      </div>
      <div className="row">
        <Button handleClick={this.addDecimal} >.</Button>
        <Button handleClick={this.addZerotoInput}>0</Button>
        <Button handleClick={this.evaluate}>=</Button>
        <Button handleClick={this.add}>+</Button>
      </div>
      <div className="row">
        <ClearButton handleClear={this.clearInput}>Clear</ClearButton>
      </div>

    </div>
    </div>
  );
}
}

export default App;
