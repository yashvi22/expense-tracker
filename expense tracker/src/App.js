import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Budget from './components/Budget'
import Remaining from './components/Remaining'
import ExpenseTotal from './components/ExpenseTotal'
import ExpenseList from './components/ExpenseList'
import AddExpense from './components/AddExpense'
import { AppProvider } from './context/AppContext'

const App=()=>{
  return (
    <AppProvider>
      <div className="container mt-3">
      <h1>My Budget Planner</h1>
      <div className="row mt-3">
        <div className="col-sm mt-3">
          <Budget/>
        </div>
        <div className="col-sm mt-3">
          <Remaining/>
        </div>
        <div className="col-sm mt-3">
          <ExpenseTotal/>
        </div>
      </div>
      <h3 className="mt-3">Expenses</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <ExpenseList/>
        </div>
      </div>
      <h3 className="mt-3">Add Expense</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <AddExpense/>
        </div>
      </div>
    </div>
    </AppProvider>
    
  )
}

export default App;
