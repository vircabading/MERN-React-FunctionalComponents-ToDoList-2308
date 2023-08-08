import React from 'react'

///////////////////////////////////////////////////
//  Text Output Component
///////////////////////////////////////////////////

const TextOutputComp = (props) => {
  return (
    <div className='col-6'>
        { (props.entry.done) ?
            <s>{props.entry.text}</s> :
            <div>{props.entry.text}</div>
        }
    </div>
  )
}

export default TextOutputComp;