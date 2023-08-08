import React from 'react'
import '../styling/ListOutput.css';

import RowComp from './RowComp';

///////////////////////////////////////////////////
//  LIST OUTPUT VIEW
///////////////////////////////////////////////////

const ListOutputView = (props) => {
  return (
    <div className='mt-3' >
      <h3>List Output:</h3>
      <p>Honey Do List: {JSON.stringify(props.honeyDoList)}</p>
      <hr />
        {
          props.honeyDoList.map((entry, i) =>
            <RowComp 
              i={i} 
              entry={entry}
              removeEntry={props.removeEntry}
              key={i} />
          )
        }
    </div>
  )
}

export default ListOutputView;