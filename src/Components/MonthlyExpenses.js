import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export class MonthlyExpenses extends Component {
  static get propTypes() {
    return {
      categories: PropTypes.array,
    }
  }

  render() {
    return (
      <div className='MonthlyExpenses'>
        <div className='MonthlyExpenses__title'>
          Monthly Expenses
        </div>

        <div className='MonthlyExpenses__summary'>
          {this.props.categories
            .sort((a, b) => b.estAmount - a.estAmount)
            .map(n => (
              <div className='MonthlyExpenses__element' key={n.category} title='Expense breakdown'>
                {`${n.category}: £${(n.actAmount / 100).toFixed(2)}/£${(n.estAmount / 100).toFixed(2)}`}
              </div>
            )
          )}
        </div>

      </div>
    )
  }
}