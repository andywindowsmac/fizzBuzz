import React, { Component } from 'react';
import './App.css';

/*
  Render numbers from 1 to 100
  But:
    - for multiplies of three, print Fizz ( instead of the number )
    - for multiplies of five, print Buzz ( instead of the number )
    - for multiplies of three and five, print FizzBuzz ( instead of the number )
*/

const firstSolution = () => {
  const numbers = [];
    for(let i = 1; i < 101; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        numbers.push(<li>FizzBuzz</li>)
        continue;
      }
      if (i % 3 === 0) {
        numbers.push(<li>Fizz</li>);
        continue;
      }
      if (i % 5 === 0) {
        numbers.push(<li>Buzz</li>);
        continue;
      }
      numbers.push(<li key={i}>{i}</li>);
    }
    return numbers;
}

class App extends Component {
  renderNumber = () => {
    
  }
    

  render() {
    return (
      <div className="App">
        {this.renderNumber()}
      </div>
    );
  }
}

export default App;
