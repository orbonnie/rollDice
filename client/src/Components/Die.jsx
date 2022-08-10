import React from 'react';
import { BsDice1 } from "react-icons/bs";
import { BsDice2 } from "react-icons/bs";
import { BsDice3 } from "react-icons/bs";
import { BsDice4 } from "react-icons/bs";
import { BsDice5 } from "react-icons/bs";
import { BsDice6 } from "react-icons/bs";

const Die = (props) => {

  let Num;

  switch (props.num) {
    case 1:
      Num = BsDice1;
      break;
    case 2:
      Num = BsDice2;
      break;
    case 3:
      Num = BsDice3;
      break;
    case 4:
      Num = BsDice4;
      break;
    case 5:
      Num = BsDice5;
      break;
    case 6:
      Num = BsDice6;
  }

  return (
    <span className='die-span' >
      <Num className={`die ${props.shake ? 'shaking' : ''}`}/>
    </span>
  )
}

export default Die;