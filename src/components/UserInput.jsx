import React from 'react'

function Userinput() {
  return (
    <div>
        {/* Created input and added aria-label since there is no specified label */}
      <input type="text" name="userInput" id="input" aria-label="input" placeholder='Dear facilitator, add another quote...' />
    </div>
  )
}

export default Userinput
