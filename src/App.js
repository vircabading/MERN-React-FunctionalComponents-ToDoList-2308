import './App.css';

import NavBarView from './components/NavBarView';

///////////////////////////////////////////////////
//  MAIN APPLICATION
///////////////////////////////////////////////////

function App() {
  return (
    <main>
      <NavBarView />
      <div className='container mt-4 p2 round bg-white' >
        <h1>To Do List</h1>
      </div>
    </main>
  );
}

export default App;
