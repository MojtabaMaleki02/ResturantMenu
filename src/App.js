import './App.css';
import List from './components/list'
import SignIn from './components/signIn'
import SignUp from './components/signUp'
import NavBar from './components/navBar'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    
    <div className="App">
        
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<List />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        
      </BrowserRouter>
    </div>
    
  );
}

export default App;
