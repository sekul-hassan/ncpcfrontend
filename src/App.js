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
import RegistrationProcess from './MyComponents/RegistrationProcess';
import TransportantionSchedule from './MyComponents/TransportantSchedule';
import Accomodation from './MyComponents/Accomodation';
import TeamStatus from './MyComponents/TeamStatus';
import OurSponsors from './Pages/OurSponsors';
import TeamListPage from "./Pages/TeamListPage";
import PaymentPage from "./Pages/PaymentPage";
import PaymentStatus from "./Pages/PaymentStatus";
import ContestPage from "./Pages/ContestPage";
import { Refund } from './Pages/Refund';
import { TeamPaymentStatus } from './Pages/TeamPaymentStatus';



function App() {

  return (
    <div>
        <Logo/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="registration" element={<TeamListPage/>}/>
            <Route path="/registration/:isShowResisterdTeam" element={<TeamListPage/>}/>
            {/* <Route path='registration-process' element={<RegistrationProcess/>}/> */}
            <Route path='transport' element={<TransportantionSchedule/>}/>
            <Route path='accomodation' element={<Accomodation/>}/>
            <Route path='status' element={<TeamStatus/>}/>
            {/* <Route path="rules" element={<Rules/>}/> */}
            <Route path="payment" element={<PaymentPage/>}/>
            <Route path="team-payment-status" element={<TeamPaymentStatus/>}/>
            {/* <Route path="refund" element={<Refund/>}/> */}
            <Route path="/paymentstatus/:message/:status" element={<PaymentStatus/>}/>
            <Route path="committee" element={<CommitteePage/>}/>
            <Route path="sponsors" element={<OurSponsors/>}/>
            <Route path="gallery" element={<GalleryPage/>}/>
            <Route path="about" element={<AboutPage/>}/>
            {/* <Route path="registernow" element={<Registration/>}/> */}
            {/*<Route path="payment" element={<PaymentPage/>}/>*/}
            <Route path="contest" element={<ContestPage/>}/>
            <Route path="/*" element={<Home/>}/>
          </Routes>
        <Footer/>
    </div>
  );
}

export default App;
