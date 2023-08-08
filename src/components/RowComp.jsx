import React from 'react'

///////////////////////////////////////////////////
//  ROW COMPONENT
///////////////////////////////////////////////////

const RowComp = (props) => {
  /**
   * deletes entry associated with delete button pressed
   * @param {*} e 
   */
  const handleDeleteEntry = (e) => {
    props.removeEntry(props.entry);
  }

  const handleCheckChange = (e) => {
    console.log("*** In Handle Check Change ******");
    props.changeEntryDone(props.entry);
  }

  return (
    <div>
      {(props.i % 2 === 0) ?
        <div className='row m-2 p-2 bg-green round'>
          <div className='col-1'>{props.i + 1}</div>
          <div className='col-6'>{props.entry.text}</div>
          <label className='col-2'>
            <input type="checkbox" checked={props.entry.done} onChange={e => handleCheckChange(e)} /> Done:
          </label>
          <button className='col-2 round btn-blue' onClick={e => handleDeleteEntry(e)}>Delete</button>
        </div> :
        <div className='row m-2 p-2 bg-blue round'>
          <div className='col-1'>{props.i + 1}</div>
          <div className='col-6'>{props.entry.text}</div>
          <button className='col-2 round btn-green' onClick={e => handleDeleteEntry(e)}>Delete</button>
        </div>
      }

    </div>
  )
}

export default RowComp;