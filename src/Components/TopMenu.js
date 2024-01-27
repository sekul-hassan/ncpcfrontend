import React, {Fragment, useEffect, useState} from 'react';
import {Container,Nav, Navbar} from "react-bootstrap";
import {Link} from "react-router-dom";
import {noticeBar} from "./Context/WebConf";
import NoticeBar from "../MyComponents/NoticeBar.js";

function TopMenu() {
    const [isScroll,setIsScroll] = useState(false);
    const [css,setCss] = useState({
        navBar:'navBar',
        navLink:'navLink'
    })

    useEffect(()=>{
        function handleScroll(){
            if(window.scrollY>70){
                setIsScroll(true);
                setCss({
                    navBar:'navBarScroll',
                    navLink:'navLinkScroll'
                })
            }
            else{
                setIsScroll(false);
                setCss({
                    navBar:'navBar',
                    navLink:'navLink'
                })
            }

        }
        window.addEventListener('scroll',handleScroll);
        return window.addEventListener('scroll',handleScroll);
    },[]);


    return (
        <Fragment>
            <Container fluid="true" className="text-center">
                <Navbar className={isScroll ? 'navBarScroll' : 'navBar'} collapseOnSelect expand="sm">
                    <Navbar.Toggle className="custom-hamburger" aria-controls="responsive-navbar-nav"/>
                    <Navbar.Collapse className="justify-content-center" id="responsive-navbar-nav">
                        <Nav className="nav">
                            <Nav.Link><Link to="/" className={css.navLink}>Home</Link></Nav.Link>
                            <Nav.Link><Link to="/about" className={css.navLink}>About</Link></Nav.Link>
                            <Nav.Link><Link to="/registration" className={css.navLink}>Registration</Link></Nav.Link>
                            {/* <Nav.Link><Link to="/committee" className={css.navLink}>Committee</Link></Nav.Link> */}
                            <Nav.Link><Link to="/gallery" className={css.navLink}>Gallery</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <NoticeBar text={noticeBar}/>
            </Container>
        </Fragment>
    );
}

export default TopMenu;