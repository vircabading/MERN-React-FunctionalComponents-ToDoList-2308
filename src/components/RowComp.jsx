import React from 'react'

const RowComp = (props) => {
  return (
    <div>
        {(props.i % 2 === 0) ? 
            <div className='row m-2 p-2 bg-green round'>
                <div className='col'>{ props.i+1 }</div>
                <div className='col'>{ props.entry.text}</div>
            </div> :
            <div className='row m-2 p-2 bg-blue round'>
                <div className='col'>{ props.i+1 }</div>
                <div className='col'>{ props.entry.text}</div>
            </div>
        }

    </div>
  )
}

export default RowComp;