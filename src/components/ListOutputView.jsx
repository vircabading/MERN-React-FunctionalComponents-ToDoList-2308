import React from 'react'
import '../styling/ListOutput.css';

import RowComp from './RowComp';

///////////////////////////////////////////////////
//  LIST OUTPUT VIEW
///////////////////////////////////////////////////

const ListOutputView = (props) => {
  return (
    <div className='mt-3' >
        {
          props.honeyDoList.map((entry, i) =>
            <RowComp 
              i={i} 
              entry={entry}
              removeEntry={props.removeEntry}
              changeEntryDone={props.changeEntryDone}
              key={i} />
          )
        }
    </div>
  )
}

export default ListOutputView;