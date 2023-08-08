import React, { useState } from 'react';
import './App.css';

import NavBarView from './components/NavBarView';
import AddToListView from './components/AddToListView';
import ListOutputView from './components/ListOutputView';

///////////////////////////////////////////////////
//  MAIN APPLICATION
///////////////////////////////////////////////////

const App = () => {
  const [honeyDoList, setHoneyDoList] = useState([]);

  /**
   * Adds a new entry to the list
   * @param {*} newEntry 
   */
  const addNewEntryToList = (newEntry) => {
    setHoneyDoList(honeyDoList => [...honeyDoList, newEntry]);
  }

  /**
   * Removes an old entry from the list
   * @param {*} oldEntry 
   */
  const removeEntry = (oldEntry) => {
    const changedHoneyDoList = honeyDoList.filter(entry => entry.text !== oldEntry.text);
    setHoneyDoList(changedHoneyDoList);
  }

  const changeEntryDone = (targetEntry) => {
    console.log("**** In change entry done:", targetEntry.text);
    let newList = [...honeyDoList];
    for (let i=0; i<honeyDoList.length; i++) {
      if (newList[i].text == targetEntry.text) {
         newList[i].done = !newList[i].done;
      }
    }
    setHoneyDoList(newList);
  }

  return (
    <main>
      {/* **** Navigation Bar *********** */}
      <NavBarView />
      {/* ///// Main Content Area //////////// */}
      <div className='container mt-4 p-2 round bg-white' >
        {/* **** Add to the List *********** */}
        <AddToListView addNewEntryToList={addNewEntryToList} />
        {/* **** Output the List ************ */}
        <ListOutputView
          honeyDoList={honeyDoList}
          removeEntry={removeEntry}
          changeEntryDone={ changeEntryDone } />
      </div>
    </main>
  );
}

export default App;
