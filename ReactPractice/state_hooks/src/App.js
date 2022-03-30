import React from 'react'
import './App.css';
// import { CounterClass } from './components/CounterClass';
import { HooksCounter } from './components/HooksCounter';
import { HooksCounterTwo } from './components/HooksCounterTwo';
import { HooksCounterThree } from './components/HooksCounterThree';
import { HooksCounterFour } from './components/HooksCounterFour';
import { EffectHooksCounterOne } from './components/EffectHooksCounterOne';
import { EffectHooksMouseToggleDisplay } from './components/EffectHooksMouseToggleDisplay';
function App() {
  return (
    <div className="App">
      {/* <CounterClass /> */}
      <HooksCounter></HooksCounter>
      <HooksCounterTwo></HooksCounterTwo>
      <HooksCounterThree></HooksCounterThree>
      <HooksCounterFour></HooksCounterFour>
      <EffectHooksCounterOne></EffectHooksCounterOne>
      <EffectHooksMouseToggleDisplay></EffectHooksMouseToggleDisplay>
    </div>
  );
}

export default App;
