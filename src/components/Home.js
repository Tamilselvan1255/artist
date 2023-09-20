import React, {useState, Fragment} from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  Navbar,
  NavbarToggler,
  Collapse,
  Nav,
  NavbarBrand,
  Container,
  Row,
  Col,
  CardGroup
} from 'reactstrap';
import { Link } from "react-router-dom";
import "../App.css";
import { useMediaQuery } from "react-responsive";
import { Button, Offcanvas } from "react-bootstrap";
import Section1 from "./Section1";
import Section2 from "./Section2";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from "mdb-react-ui-kit";
import {GoHome} from 'react-icons/go';
import {TfiGallery} from 'react-icons/tfi';
import {MdContacts} from 'react-icons/md';
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
import FAB1 from "./FAB1";

function Home({ name, ...props }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const Desktop = ({ children }) => {
    const isDesktop = useMediaQuery({ minWidth: 992 })
    return isDesktop ? children : null
  }
  const Tablet = ({ children }) => {
    const isTablet = useMediaQuery({ minWidth: 712, maxWidth: 991 })
    return isTablet ? children : null
  }
  const Mobile = ({ children }) => {
    const isMobile = useMediaQuery({ maxWidth: 711 })
    return isMobile ? children : null
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const actions = [
    { label: "About", icon: <FcAbout />, onClick: console.log },
    { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
    { label: "Picture", icon: <FcCamera />, onClick: console.log },
    { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
  ];

  return (
    <div style={{backgroundColor:'#97AF90'}}>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%',
      }}>
        <Navbar style={{ backgroundColor: '#F7DC6F' }}>
          {/* <div className="nav-logo">
                                  <img
                                  src="https://i.pinimg.com/564x/26/b4/f5/26b4f5d56a4b0f8dafc6e6277114aa31.jpg"
                                  alt="Logo"
                                  className="logo"
                                  width="32"
                                  height="32"
                                  />
                          </div>   */}
          

          <NavbarToggler  onClick={handleShow} className="me-2" >{name}</NavbarToggler>
          
      <Container>
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#4A235A' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>
      </Container>
      <Offcanvas style={{backgroundColor:'#97AF90 ', color:'#E74C3C', paddingTop:'20px'}} show={show} onHide={handleClose} {...props}>
        <Navbar>
          <Container>
        <Offcanvas.Title><center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#F7DC6F' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center></Offcanvas.Title>
        </Container></Navbar>
        <Offcanvas.Body>
        <Nav className="nav" navbar>
              <li>
                <Link to="/"><GoHome /> <span style={{paddingInlineStart:'5px'}}>Home</span></Link>
              </li>
              <li>
                <Link to="/gallery"><TfiGallery /><span style={{paddingInlineStart:'5px'}}>Testimonials</span></Link>
              </li>
              <li>
                <Link to="/contact"><MdContacts /><span style={{paddingInlineStart:'5px'}}>Contact</span></Link>
              </li>
              <center><Offcanvas.Header closeButton></Offcanvas.Header></center>
              <FAB1 />
            </Nav>
        </Offcanvas.Body>
        

      </Offcanvas>
        </Navbar>
      </div ><br></br><br></br><br></br>
      <Section1 /><br></br><br></br>   
      {/* <Fab/> */}
    </div>
  );
}


export default Home;


