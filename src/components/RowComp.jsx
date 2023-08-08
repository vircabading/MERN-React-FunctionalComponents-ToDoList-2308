import React from 'react';
import TextOutputComp from './TextOutputComp';

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
    props.changeEntryDone(props.entry);
  }

  return (
    <div>
      {(props.i % 2 === 0) ?
        <div className='row m-2 p-2 bg-green round'>
          <div className='col-1'>{props.i + 1}</div>
          {/* **** Entry Text Output ************ */}
          <TextOutputComp entry={props.entry} />
          {/* **** Done Check Mark ************ */}
          <label className='col-2'>
            Done:&nbsp;&nbsp;
            <input type="checkbox" checked={props.entry.done} onChange={e => handleCheckChange(e)} />
          </label>
          <button className='col-2 round btn-blue' onClick={e => handleDeleteEntry(e)}>Delete</button>
        </div> :
        <div className='row m-2 p-2 bg-blue round'>
          <div className='col-1'>{props.i + 1}</div>
          {/* **** Entry Text Output ************ */}
          <TextOutputComp entry={props.entry} />
          {/* **** Done Check Mark ************ */}
          <label className='col-2'>
            Done:&nbsp;&nbsp;
            <input type="checkbox" checked={props.entry.done} onChange={e => handleCheckChange(e)} />
          </label>
          <button className='col-2 round btn-green' onClick={e => handleDeleteEntry(e)}>Delete</button>
        </div>
      }

    </div>
  )
}

export default RowComp;