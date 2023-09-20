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
import ReactImageGallery from "./ReactImageGallery";
import { useNavigate, navigate } from "react-router-dom";



function Gallery({ name, ...props }) {
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
    
    <div style={{backgroundColor:'#97AF90'}}>
       
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%',
      }}>
        <Navbar style={{ backgroundColor: '#0E6251   ' }}>
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
      <Navbar>
        <Container>
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#0E6251 ',  }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>
          </Container>
        </Navbar>
      {/* <Offcanvas.Title><center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#E74C3C' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center></Offcanvas.Title> */}
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
        <span style={{color:'#0E6251 '}}><b>&larr; Back</b></span>
      </button>      
      </div ><br></br>
      <ReactImageGallery />
    </div>
  );
}

export default Gallery;


