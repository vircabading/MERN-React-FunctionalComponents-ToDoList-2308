import React from 'react'
import '../styling/AddToList.css'

///////////////////////////////////////////////////
//  ADD TO LIST VIEW
///////////////////////////////////////////////////

const AddToListView = (props) => {
    return (
        <form className='m-2  p-2 round bg-grey form-group'>
            <label>
                <h5>Add new entry to list:</h5>
            </label>
            <input
                type='text'
                className='form-control round' 
                placeholder='enter new item here' >

            </input>
            <button
                className='btn round p-2 m-2 bg-btn' >
                <strong>
                    Add To List
                </strong>
            </button>
        </form>
    )
}

export default AddToListView;