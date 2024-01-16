import './App.css';
import '../src/Assets/CSS/Custom.css';
import '../src/Assets/CSS/Responsive.css';
import '../src/Assets/CSS/Global.css';
import '../src/Assets/CSS/AlumniCSS.css'
import '../src/Assets/CSS/Extra.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Pages/Home";
import {Route,Routes} from "react-router-dom";
import Registration from "./Pages/Registration";
import Footer from "./Components/Footer";
import React from "react";
import Logo from "./Components/Logo";
import TopMenu from "./Components/TopMenu";
import CommitteePage from "./Pages/CommitteePage";
import GalleryPage from './Pages/GalleryPage';
import AboutPage from "./Pages/AboutPage";
import Rules from './Pages/Rules';


function App() {
  return (
    <div>
        <Logo/>
        <TopMenu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/registration" element={<Registration/>}/>
        <Route path="/rules" element={<Rules/>}/>
        <Route path="/committee" element={<CommitteePage/>}/>
        <Route path="/gallery" element={<GalleryPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
      </Routes>
        <Footer/>
    </div>
  );
}

export default App;
