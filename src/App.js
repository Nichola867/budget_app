import React, { Component } from 'react';
import './App.css';
import { Expense } from './Models/Expense';
import { Dashboard } from './Components/Dashboard';

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

        <Dashboard
          income={this.state.income}
          expenses={this.state.expenses}
        />
      </div>
    );
  }
}
