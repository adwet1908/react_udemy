import "../NewExpense/ExpenseForm.css"
import {useState} from  'react'
function ExpenseForm(){

    // const [enteredTitle, setEnteredTitle] = useState(''); 
    // const [enteredAmount, setEnteredAmount] = useState(''); 
    // const [enteredDate, setEnteredDate] = useState(''); 

    const [userInput, setUserInput] = useState({
        enteredTitle: '', 
        enteredAmount: '', 
        enteredDate: '' 
    });  


    const titleChangeHandler = (event)=>{
        setUserInput({
            ...userInput, 
            enteredTitle: event.target.value, 
        }); 
    }

    const amountChangeHandler = (event)=>{
        setUserInput({
            ...userInput, 
            enteredAmount: event.target.value, 
        });  
    }

    
    const dateChangeHandler = (event)=>{
        setUserInput({
            ...userInput, 
            enteredDate: event.target.value, 
        });     }

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control" onChange={titleChangeHandler}>
                    <label>Title</label>
                    <input type="text" min = "0.01" step = "0.01" />
                </div>
                <div className="new-expense__control" onChange={amountChangeHandler}>
                    <label>Amount</label>
                    <input type="text" min = "0.01" step = "0.01" />
                </div>
                <div className="new-expense__control" onChange={dateChangeHandler}>
                    <label>Date</label>
                    <input type="date" min = "2019-01-1" max = "2023-12-31" />
                </div>
            </div>
            <div className="new-expense__actions">
                <button>Add Expense</button>
            </div>

        </form>
    ); 
}

export default ExpenseForm; 