import React from 'react';

// Add a new component to display the spinner.
// This could be omitted but making a re-usable component seems preferable.
export default class LoadingSpinner extends React.Component {
  render() {
    return <img className='spinner' src='/spinner.gif' alt='Loading' />;
  }
} 