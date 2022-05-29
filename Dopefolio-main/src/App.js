import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Layout from './components/Layout'
import './App.scss'
// import './index.css'
import Skills from './components/skills'
import { Projects } from './components/projects'

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
           <Route path="/skill" element={<Skills />} />
           <Route path="/project" element={<Projects />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
