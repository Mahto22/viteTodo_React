import './App.css';
import Header from './components/Header/Header';
import Home from './components/Header/Home';
import About from './components/Header/About';
import Contact from './components/Header/Contact';
import Footer from './components/Header/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import { ParentComp } from './components/Header/ParentComp';
import TodoList from './components/Header/TodoList';
function App() {
  return (
    <>
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/parent' element={<ParentComp />}></Route>
      <Route path='/todolist' element={<TodoList />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
    </>
  )
}

export default App
