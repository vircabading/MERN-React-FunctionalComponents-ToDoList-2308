import React, {useState} from 'react'
import '../styling/AddToList.css'

///////////////////////////////////////////////////
//  ADD TO LIST VIEW
///////////////////////////////////////////////////

const AddToListView = (props) => {
    const [listEntry, setListEntry] = useState("");

    const handleListEntryChange = (e) => {
        const newListEntry = e.target.value;
        setListEntry( newListEntry );           // Get the new value of list entry
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = {                      // Create a new entry
            text: listEntry,
            done: false
        }
        props.addNewEntryToList(newEntry);      // Add a new entry to the honey do list
        setListEntry("");                       // Reset the text input area
    }

    return (
        <form className='m-2  p-2 round bg-grey form-group' 
            onSubmit={ handleSubmit } >
            <label for="listEntry">
                <h5>Add new entry to list:</h5>
            </label>
            <input                              // Text Bar to get new list entry
                type='text'
                className='form-control round'
                id="listEntry"
                name="listEntry"
                value={ listEntry }
                onChange={ handleListEntryChange }
                placeholder='let honey know what to do here' >
            </input>
            <button                             // Submit button
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