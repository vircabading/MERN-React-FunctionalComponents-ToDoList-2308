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

  return (
    <main>
      {/* **** Navigation Bar *********** */}
      <NavBarView />
      {/* ///// Main Content Area //////////// */}
      <div className='container mt-4 p-2 round bg-white' >
        <AddToListView addNewEntryToList={addNewEntryToList} />
        <ListOutputView
          honeyDoList={honeyDoList}
          removeEntry={removeEntry} />
      </div>
    </main>
  );
}

export default App;
