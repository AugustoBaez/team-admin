import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Window from './components/Window';
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/players' element={<List />}></Route>
          <Route path='/' element={<AddPlayer />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
