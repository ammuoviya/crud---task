
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import Navbar from './Bars/navbar';
import Reactcontent from './Bars/routecontent';

function App() {
  return (
    <div className="App">
     <div className='titleDiv'>
      <h1 className='title'>CRUD Operations</h1>
     </div>
     <div className='content-container'>
      <Router>
        <div className='sidebar-area'>
        <Navbar/>
        </div>        
        <div className='content-area'>
          <Reactcontent/>
        </div>
      </Router>
     </div>
    </div>
  );
}

export default App;