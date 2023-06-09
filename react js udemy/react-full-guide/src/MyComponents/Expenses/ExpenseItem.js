import React, { useState } from 'react'
import './ExpenseItem.css'
import './ExpenseDate'
import ExpenseDate from './ExpenseDate'
import Card from '../UI/Card'

function ExpenseItem(props) {

  const [title , setTitle ] = useState(props.title); // useState needs a defualt variable 

  const clickHandler = ()=>{
    setTitle("updated")
    console.log(title)     
  }
  return (
    <>
      <Card className='expense-item'>
      <ExpenseDate date = {props.date}/>
        <div className='expense-item__description' >
          <h2>{title}</h2>
          <div className='expense-item__price'>${props.amount}</div>
        </div>
        <button onClick = {clickHandler}>Button</button>
      </Card> 
      </>
  );
}

export default ExpenseItem;