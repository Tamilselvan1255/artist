import React, {useState} from "react"
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
import {GoHome} from 'react-icons/go';
import {TfiGallery} from 'react-icons/tfi';
import {MdContacts} from 'react-icons/md';
import { Footer } from "rsuite";
import Iframe from "react-iframe";
import { HiDeviceMobile } from "react-icons/hi";
import { useNavigate, navigate } from "react-router-dom";


function Contact({ name, ...props }) {
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

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };


  return (
    <div style={{backgroundColor: '#97AF90'  }}>
      
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%',
      }}>
        <Navbar style={{ backgroundColor: '#EC7063' }}>
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
          
          {/* <Button variant="primary" onClick={handleShow} className="me-2">
        {name}
      </Button> */}
         <Container>
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#97AF90' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>
          </Container>
      <Offcanvas style={{backgroundColor:'#97AF90 ', color:'#E74C3C', paddingTop:'20px'}} show={show} onHide={handleClose} {...props}>
          {/* <Offcanvas.Title><center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#E74C3C' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center></Offcanvas.Title> */}
          <Navbar>
            <Container>
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#EC7063' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>

            </Container>
          </Navbar>
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
            </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        </Navbar>
        <button onClick={goBack} className='contact btn'>
        <span style={{color:'#EC7063'}}><b>&larr; Back</b></span>
      </button>

      </div ><br></br>
      <Container>
        <Row>
          <center>
            <p style={{color:'white'}}>4th avenue,</p>
            <p style={{color:'white'}}>Jason Stathem street,</p>
            <p style={{color:'white'}}>Gotham City, North Carolina, Indiana.</p>
            <p ><span style={{color:'#BCECE0'}}><HiDeviceMobile /></span><span style={{color:'white'}}>+191234564789, 45684245</span></p>
          </center>
          <center>
          <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d196237.84519946456!2d-86.27283479910783!3d39.779700292789705!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ffa7796a03%3A0xd68e9df640b9ea7c!2sIndianapolis%2C%20IN%2C%20USA!5e0!3m2!1sen!2sin!4v1677831400548!5m2!1sen!2sin" width="100%" height="300px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
          </center>
         
        </Row>
      </Container>
      <Footer style={{ marginTop: '20px', }}>
      <p style={{ fontSize: '15px', textAlign: 'center', color:'white' }}> © 1996-2022 P012. All Rights Reserved.</p>
      </Footer>
    </div>
  );
}

export default Contact;


