import './App.css'
import NavBar from './components/NavBar'
import { Routes, Route, useLocation } from 'react-router-dom'
import Authentication from './views/Authentication'
import Home from './views/Home'
import Profile from './views/Profile'
import Quiz from './views/Quiz'
import Footer from './components/Footer'

function App() {
  const location = useLocation();
  const showNavBar = location.pathname !== '/';

  return (
    <>
      {showNavBar && <NavBar />}
      <div>
        <Routes>
          <Route path='/' element={<Authentication />} />
          <Route path='/Home' element={<Home />} />
          <Route path='/Profile' element={<Profile />} />
          <Route path='/Quiz' element={<Quiz />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App
