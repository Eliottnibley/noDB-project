import React from 'react'

function Winner (props) {
  return (
    <div className='Winner-animation'>
      <div>{`${props.name}`}</div>
      <div>WINNER!!</div>
    </div>
  )
}

export default Winner