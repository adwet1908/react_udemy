import ExpenseForm from "./ExpenseForm";

function NewExpense(){

    const onSaveExpenseDataHandler = (entredExpenseData)=>{
        const expenseData = {
            ...entredExpenseData, 
            id: Math.random().toString() 
        };
        console.log(expenseData)
    };


    return(
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData = {onSaveExpenseDataHandler}/>
        </div>
    ); 
}

export default NewExpense;