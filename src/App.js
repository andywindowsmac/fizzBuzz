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
      const isFizz = i % 3 === 0;
      const isBuzz = i % 5 === 0;
      const result = 
        isFizz && isBuzz 
          ? <li>FizzBuzz</li>
          : isFizz
            ? <li>Fizz</li>
            : isBuzz
              ? <li>Buzz</li>
              : <li>{i}</li>;
      numbers.push(result);
    }
    return numbers;
}

class App extends Component {
  renderNumber = () => {
    return firstSolution();
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
