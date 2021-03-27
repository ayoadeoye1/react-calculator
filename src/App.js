import React, { Component } from 'react';
import './App.css';
//import { FaMinus, FaPlus } from 'react-icons/fa';

class App extends Component {
  constructor() {
    super();
    this.state = { 
      ans: ''
    }
  }

  handleDigit7 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '7' }));
  }
  handleDigit8 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '8' }));
  }
  handleDigit9 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '9' }));
  }
  handleDigit4 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '4' }));
  }
  handleDigit5 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '5' }));
  }
  handleDigit6 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '6' }));
  }
  handleDigit1 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '1' }));
  }
  handleDigit2 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '2' }));
  }
  handleDigit3 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '3' }));
  }
  handleDigit0 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '0' }));
  }

  handleCls = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans = '' }));
  }

  handleFloor = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans = eval(prevState.ans)}));
  }

  handleDig1 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '+'}));
  }
  handleDig2 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '-'}));
  }
  handleDig3 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '/'}));
  }
  handleDig4 = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '*'}));
  }
  handleDigd = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '.'}));
  }
  handleExp = () => {
    this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '**'}));
  }
  handleExp1 = () => {
      this.setState((prevState) =>({ ...prevState, ans:prevState.ans += '**2'}));
  }

  change = () => {
    console.log("started working");
  // this.setState((prevState) =>({ ...prevState, ans:prevState.ans += KeyboardEvent.number}));
  }

  backSpace = () => {
   this.setState((prevState) =>({ ...prevState, ans:prevState.ans  += 22/7}));
  }

  // pop: function backSpace(){
  //   this.setState((prevState) =>({ ...prevState, ans:prevState.ans.pop}))
  // }

  render() { 
    return ( 
      <div>
        <div className="container">
          <input className="head" onChange={this.change} type="text" placeholder="0" value={this.state.ans} />
          <input className="btns" type="submit" value="7" onClick={this.handleDigit7} />
          <input className="btns" type="submit" value="8" onClick={this.handleDigit8} />
          <input className="btns" type="submit" value="9" onClick={this.handleDigit9} />
          <input className="btns" type="submit" value="Pi" onClick={this.backSpace} />
          <input className="btns" type="submit" value="Cls" onClick={this.handleCls} /><br />
          <input className="btns" type="submit" value="4" onClick={this.handleDigit4} />
          <input className="btns" type="submit" value="5" onClick={this.handleDigit5} />
          <input className="btns" type="submit" value="6" onClick={this.handleDigit6} />
          <input className="btns" type="submit" value="*" onClick={this.handleDig4} />
          <input className="btns" type="submit" value="/" onClick={this.handleDig3} /><br />
          <input className="btns" type="submit" value="1" onClick={this.handleDigit1} />
          <input className="btns" type="submit" value="2" onClick={this.handleDigit2} />
          <input className="btns" type="submit" value="3" onClick={this.handleDigit3} />
          <input className="btns" type="submit" value="+" onClick={this.handleDig1} />
          <input className="btns" type="submit" value="-" onClick={this.handleDig2} /><br />
          <input className="btns" type="submit" value="0" onClick={this.handleDigit0} />
          <input className="btns" type="submit" value="." onClick={this.handleDigd} />
          <input className="btns" type="submit" value="X^x" onClick={this.handleExp} />
          <input className="btns" type="submit" value="X^2" onClick={this.handleExp1} />
          <input className="btns" type="submit" value="=" onClick={this.handleFloor} />
        </div> 
      </div>
     );
  }
}
 
export default App;