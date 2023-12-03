import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';
import  System  from './pages/System';

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/Publications" element={<Publications/>} />
        <Route path="/System" element={<System/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
