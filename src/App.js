import React, { Component } from 'react';
import './App.css';
import { Expense } from './Models/Expense';

export class App extends Component {
  state = {
    income: 100000,
    expenses: [
      new Expense({ desc: 'Petrol', category: 'Car', date: Date.now(), estAmount: 10000, actAmount: 0 }),
      new Expense({ desc: 'Cat Food', category: 'Pets', date: Date.now(), estAmount: 4000, actAmount: 0 })
    ]
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          Budget App
      </header>
      <div>
        Income: £{(this.state.income/100).toFixed(2)}
      </div>

      <div>
        Expenses: 
        {this.state.expenses.map(n => n.desc).join(", ")}
      </div>
      </div>
    );
  }
}
