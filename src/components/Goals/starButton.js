import React from 'react'

const starButton = ({doSomething, words}) => {

  return (
    <>
      <button type='submit' onClick={doSomething}> {words} </button>
    </>
  )
}

export default starButton;