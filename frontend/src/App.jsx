import './App.css'
import { Route, Routes } from "react-router-dom";
import HomePage from './pages/HomePage';
import CreatePage from './pages/CreatePage'
function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/new" element={<CreatePage />} />
    </Routes>
    </>
  )
}

export default App;
