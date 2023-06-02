import React from 'react'
import './ExpenseItem.css'

function ExpenseItem() {
    const date = new Date();
    const currentDate = date.getDate(); 
    const description = "car Insurance";  
    const expense = "$500";  
    
    return (
      <div className='expense-item' >
        <div>{currentDate}</div>
        <div className='expense-item__description' >
          <h2>{description}</h2>
          <div className='expense-item__price'>{expense}</div>
        </div>
      </div>
    );
  }
  
  export default ExpenseItem;