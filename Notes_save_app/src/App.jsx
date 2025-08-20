import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
