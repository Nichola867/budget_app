import React, { Component } from 'react';
import '../App.css';
import PropTypes from 'prop-types';

export class Breakdown extends Component {
  static get propTypes() {
    return {
      categories: PropTypes.array
    }
  }

  render() {
    const total = this.props.categories.map(c => c.estAmount).reduce((a, b) => a + b, 0)

    return (
      <div className='Breakdown' >
        <div className='Breakdown__title'>
          Breakdown of expenses
      </div>

        <div className='Breakdown__summary'>
          {this.props.categories
            .map(n => (
              <div className='Breakdown__element' key={n.category} title='Expense breakdown'>
                {`${n.category}: £${(n.estAmount / 100).toFixed(2)} (${((n.estAmount / total) * 100).toFixed(1)}%)`}
              </div>
            )
            )}
        </div>

      </div>
    )
  }
}