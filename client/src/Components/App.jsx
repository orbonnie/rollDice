import React, {useState} from 'react';
import Die from './Die.jsx';

const App = () => {
  const [rolling, setRolling] = useState(false);
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);

  const roll = () => {
    setRolling(true);
    let rand1 = Math.floor(Math.random() * 6);
    let rand2 = Math.floor(Math.random() * 6);
    setDie1(rand1);
    setDie2(rand2);
  }

  setTimeout(() => {
    setRolling(false);
  }, 4000)

  return (
    <div className='main'>
      <div className='app-die-container'>
      <Die num={die1} shake={rolling}/> <Die num={die2} shake={rolling}/>
      </div>
      <button
        onClick={roll}
        className='app-button'
        disabled={rolling}
      >
        {rolling ? 'rolling...' : 'Roll Dice'}
      </button>
    </div>
  )
}

export default App;