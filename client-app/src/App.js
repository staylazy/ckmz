import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Publications } from './pages/Publications';

function App() {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home/>} />
        <Route path="/Publications" element={<Publications/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
