import { Component } from 'react';

import logo from './logo.svg';
import './App.css';

class App extends Component{
constructor(){
  super();
  // this.state = {
  //   monster1: {
  //     name: 'Ram Sharma'
  //   },
  //   monster2: {
  //     name: 'Mohan Gupta'
  //   },
  //   monster3: {
  //     name: 'Sohan Verma'
  //   }
  // }

  this.state = {
    monsters: []
  };
  console.log('1')
}
  
  componentDidMount() {
    console.log('3')
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => 
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state)
          }
      )
      )
  }

  render() {
console.log('2')
    return <div className='App'>
      {
        this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>
        })
      }
      
    </div>

  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Hello {this.state.name.firstName} {this.state.name.lastName}, I work at {this.state.company}
  //       </p>
  //       <button onClick={() => {
  //         this.setState(
  //           () => {
  //             return {
  //               name: { firstName: 'Mohan', lastName: 'Gupta' }
  //             };
  //           }
  //         )
  //       }}
  //       >Change Name</button>
  //     </header>
  //   </div>
  // );
}
}

export default App;
