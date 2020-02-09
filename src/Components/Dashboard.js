import React, { Component } from 'react';
import '../App.css';
import { Summary } from './Summary';
import { MonthlyExpenses } from './MonthlyExpenses';
import PropTypes from 'prop-types';

export class Dashboard extends Component {
  static get propTypes() {
    return {
      income: PropTypes.number,
      expenses: PropTypes.array
    }
  }

  getCategories() {
    const categoryArray = []

    this.props.expenses.forEach(n => {
      const foundCategories = categoryArray.map(c => c.category)
      const indexOfThisCategory = foundCategories.findIndex(c => c === n.category)
      if (indexOfThisCategory > -1) {
        categoryArray[indexOfThisCategory].estAmount += n.estAmount
        categoryArray[indexOfThisCategory].actAmount += n.actAmount
      } else {
        categoryArray.push({
          category: n.category,
          estAmount: n.estAmount,
          actAmount: n.actAmount
        })
      } 
    })

    return categoryArray
  }


  render() {
    const categories = this.getCategories()
    return (
      <div className='Dashboard'>
        <div className='Dashboard__title'>
          Dashboard
        </div>

        <Summary
          income={this.props.income}
          expenses={this.props.expenses}
        />
        <MonthlyExpenses
          categories={categories}
        />
      </div>
    )
  }
}