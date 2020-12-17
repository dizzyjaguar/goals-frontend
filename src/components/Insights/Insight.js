import React from 'react';

const Insight = ({ insight }) => {
  return (
    <>
      <div className='Insights'>
        <p>{insight.insight}</p>
        <p>by: {insight.insightBy.username}</p>
      </div>
    </>
  )
}

export default Insight;