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
import CommitteePage from "./Pages/CommitteePage";
import GalleryPage from './Pages/GalleryPage';
import AboutPage from "./Pages/AboutPage";
import Rules from './Pages/Rules';
import RegistrationProcess from './MyComponents/RegistrationProcess';
import TransportantionSchedule from './MyComponents/TransportantSchedule';
import Accomodation from './MyComponents/Accomodation';
import TeamStatus from './MyComponents/TeamStatus';


function App() {

  return (
    <div>
        <Logo/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="registration" element={<RegistrationProcess/>}/>
            <Route path='registration-process' element={<RegistrationProcess/>}/>
            <Route path='transport' element={<TransportantionSchedule/>}/>
            <Route path='accomodation' element={<Accomodation/>}/>
            <Route path='status' element={<TeamStatus/>}/>
            <Route path="rules" element={<Rules/>}/>
            <Route path="committee" element={<CommitteePage/>}/>
            <Route path="gallery" element={<GalleryPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            <Route path="/*" element={<Home/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
