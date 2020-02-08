import React, { Component } from 'react';
import '../App.css';
import { Summary } from './Summary';
import PropTypes from 'prop-types';

export class Dashboard extends Component {
  static get propTypes() {
    return {
      income: PropTypes.number,
      expenses: PropTypes.array
    }
  }

  render() {
    return (
      <div className='Dashboard'>
        <div className='Dashboard__title'>
          Dashboard
        </div>

        <Summary
          income={this.props.income}
          expenses={this.props.expenses}
        />
      </div>
    )
  }
}