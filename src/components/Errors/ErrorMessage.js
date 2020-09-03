import React from 'react';
import { connect } from 'react-redux';

const ErrorMessage = ({ error }) => {
  return (
    <>
    {error && 
      <div>
        {error}
      </div>
    }
    </>
  )
}

export default connect(store => ({error: store.error}))(ErrorMessage)