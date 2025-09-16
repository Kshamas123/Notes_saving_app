import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Login from './Components/Login';
import SignUp from './Components/SignUp';

function App() {
  
  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<SignUp/>} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
