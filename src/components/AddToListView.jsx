import React, {useState} from 'react'
import '../styling/AddToList.css'

///////////////////////////////////////////////////
//  ADD TO LIST VIEW
///////////////////////////////////////////////////

const AddToListView = (props) => {
    const [listEntry, setListEntry] = useState("");

    const handleListEntryChange = (e) => {
        const newListEntry = e.target.value;
        setListEntry( newListEntry );
    }

    return (
        <form className='m-2  p-2 round bg-grey form-group'>
            <label for="listEntry">
                <h5>Add new entry to list:</h5>
            </label>
            <input
                type='text'
                className='form-control round'
                id="listEntry"
                name="listEntry"
                value={ listEntry }
                onChange={ handleListEntryChange }
                placeholder='enter new item here' >

            </input>
            <button
                className='btn round p-2 m-2 bg-btn' >
                <strong>
                    Add To List
                </strong>
            </button>
            <p>List Entry: { JSON.stringify(listEntry) }</p>
        </form>
    )
}

export default AddToListView;