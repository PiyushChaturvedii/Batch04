import { useEffect, useState } from 'react';

import CardList from './components/card-list/card-list.component'
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = ()=> {  
  const [searchField, setSearchField] = useState(''); //[value, setValue]
  const [monsters, setMonsters] = useState([]); //[value, setValue]
  const [filteredMonsters, setFilterMonsters] = useState(monsters);

  console.log('rendered');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users)=>setMonsters(users))
},[])

  useEffect(() => {
    const newfilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilterMonsters(newfilteredMonsters)
  },[monsters,searchField])

  const onSearchChange = (event) => { 
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString)
  }
  
  return (
    <div className='App'>
    <h1 className='app-title'>Monsters List</h1>
    <SearchBox
      className='search-box'
      onChangeHandler={onSearchChange}
      placeholder='search monsters'
      />    
    <CardList monsters={filteredMonsters} />

  </div>
  )
}




// class App extends Component{
// constructor(){
//   super();
//   this.state = {
//     monsters: [],
//     searchField:''
//   };
  
// }
  
//   componentDidMount() {
    
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//             return { monsters: users };
//           }
//       )
//       )
//   }

//   onSearchChange = (event) => {
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField }
//     })
//   }

//   render() {
//     const { monsters, searchField } = this.state
//     const {onSearchChange} = this

//       const filteredMonsters = monsters.filter((monster) => {
//         return monster.name.toLocaleLowerCase().includes(searchField);
//       });
    

//     return (<div className='App'>
//       <h1 className='app-title'>Monsters List</h1>
//       <SearchBox
//         className='search-box'
//         onChangeHandler={onSearchChange}
//         placeholder = 'search monsters'
//       />
//       <CardList monsters={filteredMonsters}/>
      
//     </div>
// )
  
// }
// }

export default App;
