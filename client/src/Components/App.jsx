import React, {useState, useEffect} from 'react';
import Die from './Die.jsx';

const App = () => {
  const [rolling, setRolling] = useState(false);
  const [die1, setDie1] = useState(1);
  const [die2, setDie2] = useState(1);
  const [shake, setShake] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setRolling(false);
    }, 1000)
  }, [shake])

  const roll = () => {
    setRolling(true);
    let rand1 = Math.ceil(Math.random() * 6);
    let rand2 = Math.ceil(Math.random() * 6);
    setDie1(rand1);
    setDie2(rand2);
    let rolls = shake + 1;
    setShake(rolls);
  }

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