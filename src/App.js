import './App.css';
import {React} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/JS/Home';
import Post from './components/JS/Post';
import Nav from './components/JS/Nav';
import Posts from './components/JS/Posts';
import About from './components/JS/About';

function App() {
  return (
    <>
    <Router>
    <Nav/>
    <Routes>
    <Route exact path="/" element={<Home/>}></Route>
    <Route path="/posts" element={<Posts/>}></Route>
    <Route path="/post/:id" element={<Post/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;
