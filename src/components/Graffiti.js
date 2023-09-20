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
import { Button, Card, Figure, Offcanvas } from "react-bootstrap";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import { MDBBtn } from "mdb-react-ui-kit";
import {GoHome} from 'react-icons/go';
import {TfiGallery} from 'react-icons/tfi';
import {MdContacts} from 'react-icons/md';
import { useNavigate, navigate } from "react-router-dom";


function Murals({ name, ...props }) {
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
    <div style={{backgroundColor:'#97AF90   '}}>
      <div style={{
        display: 'block', width: '100%', maxWidth: '100%',
      }}>
        <Navbar style={{ backgroundColor: '#BF4240' }}>
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
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#BF4240',  }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>
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
      </div >
      <button onClick={goBack} className='contact btn'>
        <b>&larr; Back</b>
      </button> 
        <Container>
        <h2 style={{fontFamily:'Stencil Std', paddingBlockStart:'20px'}}>GRAFFITI</h2></Container>    
        <Row style={{paddingBlockStart:'15px', padding:'30px', paddingInlineStart:'10%' }}>
            <Col sm={4} className="img_section" >
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4', }} src={require("../assets/graffiti1.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti2.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti3.jpg")} /></Figure>
            </Col>
        </Row>

        <Row style={{paddingBlockStart:'45px', padding:'30px', paddingInlineStart:'10%' }}>
            <Col sm={4} className="img_section" >
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4', }} src={require("../assets/graffiti4.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti5.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti6.jpg")} /></Figure>
            </Col>
           
        </Row>

        <Row style={{paddingBlockStart:'45px', padding:'30px', paddingInlineStart:'10%' }}>
            <Col sm={4} className="img_section" >
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4', }} src={require("../assets/graffiti7.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti8.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti9.jpg")} /></Figure>
            </Col>
           
        </Row>

        <Row style={{paddingBlockStart:'45px', padding:'30px', paddingInlineStart:'10%' }}>
            <Col sm={4} className="img_section" >
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4', }} src={require("../assets/graffiti10.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti11.jpg")} /></Figure>
            </Col>
            <Col sm={4} className="img_section">
                <Figure><img style={{ padding:'10px', backgroundColor:'#D0D3D4 '}} src={require("../assets/graffiti12.jpg")} /></Figure>
            </Col>
           
        </Row>
    </div>
  );
}


export default Murals;


