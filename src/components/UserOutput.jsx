import React from 'react'

function UserOutput(props) {
  return (
    <div className='every'>
        <h2>Our facilitator said:</h2>
        <h4>{props.paragraph1}</h4>
        <h4>{props.paragraph2}</h4>
        <h4>{props.paragraph3}</h4>
    </div>
  )
}

export default UserOutput
