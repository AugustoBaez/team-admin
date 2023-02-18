import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import AddPlayer from './components/AddPlayer';
import Status from './components/Status';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/players/list' element={<List />}></Route>
          <Route path='/players/addplayer' element={<AddPlayer />}></Route>
          <Route path='/status/game/1' element={<Status />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
