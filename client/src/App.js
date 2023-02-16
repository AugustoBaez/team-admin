import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Window from './components/Window';
import AddPlayer from './components/AddPlayer';

function App() {
  return (
    <div className="App">
      <h1>Manage Player</h1>
      <h1>Manage Player Status</h1>
      {/* <Window> */}
      {/* <List /> */}
      <AddPlayer />
      {/* </Window> */}
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <Window>
              <List />
            </Window>
          }></Route>
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
