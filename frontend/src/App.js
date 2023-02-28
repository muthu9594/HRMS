import './App.css';
import {BrowserRouter as Router ,Route ,Routes  } from 'react-router-dom'

function App() {
  return (
    <div >
      <Router>
        <Routes>
          <Route path='/login' element={"Hello"}/>
          <Route path='/Employees' element={"Hello"}/>
          <Route path='/Holidays' element={"Hello"}/>
          <Route path='/Job' element={"Hello"}/>
          <Route path='/Leave' element={"Hello"}/>
          <Route path='/Organization' element={"Hello"}/>
          <Route path='/PayRoll' element={"Hello"}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
