import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Window from './components/Window';
import AddPlayer from './components/AddPlayer';
import Status from './components/Status';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/players/list' element={<List />}></Route>
          <Route path='/players/addplayer' element={<AddPlayer />}></Route>
          <Route path='/status/game/1' element={<Status />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
