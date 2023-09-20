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
        <Navbar style={{ backgroundColor: '#07DAC0' }}>
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
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#97AF90 ' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>
          </Container>
      <Offcanvas style={{backgroundColor:'#97AF90 ', color:'#97AF90', paddingTop:'20px'}} show={show} onHide={handleClose} {...props}>
        <Navbar>
        <Container>
            <center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#07DAC0',  }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center>
          </Container>
        {/* <Offcanvas.Title><center><p style={{ fontSize: '38px', fontFamily: "Stencil Std", color: '#07DAC0' }}><span style={{fontFamily:'Brush Script MT', fontSize:'35px'}}>The</span> <span style={{fontFamily:'papyrus', fontSize:'50px'}}><b>ArtisT</b></span></p></center></Offcanvas.Title> */}
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
      </div >
      <button onClick={goBack} className='contact btn'>
      <b>&larr; Back</b>
      </button> 
            
        <Row style={{paddingBlockStart:'45px', padding:'30px' }}>
        <h2 style={{fontFamily:'Stencil Std', paddingInlineStart:'30px'}}>MURALS</h2>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals1.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals2.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals3.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals4.jpg")} /></Figure>
            </Col>
        </Row>

        <Row style={{paddingBlockStart:'45px', padding:'30px' }}>
            <Col sm={1}></Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals5.jpg")} /></Figure>
            </Col>
           
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals6.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals7.jpg")} /></Figure>
            </Col>
            <Col sm={1}></Col>
        </Row>

        <Row style={{paddingBlockStart:'45px', padding:'30px' }}>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals8.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals9.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals10.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals11.jpg")} /></Figure>
            </Col>
        </Row>

        <Row style={{paddingBlockStart:'45px', padding:'30px' }}>
            <Col sm={1}></Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals12.jpg")} /></Figure>
            </Col>
           
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals13.jpg")} /></Figure>
            </Col>
            <Col sm={3} className="img_section">
                <Figure><img style={{borderRadius:'50%', padding:'10px', backgroundColor:'#D0D3D4 ', borderRadius:'50%'}} src={require("../assets/murals14.jpg")} /></Figure>
            </Col>
            <Col sm={1}></Col>
        </Row>
    </div>
  );
}


export default Murals;


