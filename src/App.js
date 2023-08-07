import React, {useState} from 'react';
import './App.css';

import NavBarView from './components/NavBarView';
import AddToListView from './components/AddToListView';
import ListOutputView from './components/ListOutputView';

///////////////////////////////////////////////////
//  MAIN APPLICATION
///////////////////////////////////////////////////

const App =() => {
  const [honeyDoList, setHoneyDoList] = useState([]);

  const addNewEntryToList = (newEntry) => {
    setHoneyDoList( honeyDoList => [...honeyDoList, newEntry] );
  }

  return (
    <main>
      {/* **** Navigation Bar *********** */}
      <NavBarView />
      {/* ///// Main Content Area //////////// */}
      <div className='container mt-4 p-2 round bg-white' >
        <AddToListView addNewEntryToList={ addNewEntryToList } />
        <ListOutputView honeyDoList={ honeyDoList } />
      </div>
    </main>
  );
}

export default App;
