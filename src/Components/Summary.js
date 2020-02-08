import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export class Summary extends Component {
  static get propTypes() {
    return {
      income: PropTypes.number,
      expenses: PropTypes.array
    }
  }

  render() {
    return (
      <div className = 'Summary'>
        <div className = 'Summary__title'>
          Summary
        </div>
        <div>
          Income: £{(this.props.income / 100).toFixed(2)}
        </div>

        <div>
          Expenses:
          {this.props.expenses.map(n => n.desc).join(", ")}
        </div>

      </div>
    )
  }
}