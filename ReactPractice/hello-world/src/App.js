import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';
import Greet,{ } from "./components/Greet";
import Welcome,{  } from "./components/Welcome";
import Hello,{  } from "./components/Hello";
import Message,{  } from "./components/Message";
import Counter,{  } from "./components/Counter";
import FunctionClick,{  } from "./components/FunctionClick";
import ClassClick,{  } from "./components/ClassClick";
import ParentComponent,{  } from "./components/ParentComponent";
import FormRendering, { } from './components/FormRendering'
class App extends Component{
  render(){
    return (
      <div className="App">

        {/* <Greet/>
        <Welcome name="Bruce" heroName="Batman"/>
        <Welcome name="Clark" heroName="Superman"/>
        <Welcome name="Diana" heroName="Wonder woman"/>
        <Hello name="Bruce" heroName="Batman">
          <p>this is child node</p>
        </Hello>
        <Hello name="Clark" heroName="Superman">
          <button>Submit</button>
        </Hello>
        <Hello name="Diana" heroName="Wonder woman"/>
        <Message></Message>

        <Counter></Counter>

        <FunctionClick/>
        <ClassClick/> 
        <ParentComponent/> */}
        <FormRendering/>
        
      </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Hello World
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"   
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
