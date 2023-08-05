import './App.css';

import NavBarView from './components/NavBarView';
import AddToListView from './components/AddToListView';
import ListOutputView from './components/ListOutputView';

///////////////////////////////////////////////////
//  MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  return (
    <main>
      {/* **** Navigation Bar *********** */}
      <NavBarView />
      {/* ///// Main Content Area //////////// */}
      <div className='container mt-4 p-2 round bg-white' >
        <AddToListView />
        <ListOutputView />
      </div>
    </main>
  );
}

export default App;
