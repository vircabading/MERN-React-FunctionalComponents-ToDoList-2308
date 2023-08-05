import './App.css';

import NavBarView from './components/NavBarView';
import AddToListView from './components/AddToListView';

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
      </div>
    </main>
  );
}

export default App;
