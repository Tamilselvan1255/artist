// import Accordion from 'react-bootstrap/Accordion';
// import { useAccordionButton } from 'react-bootstrap/AccordionButton';
// import Card from 'react-bootstrap/Card';
// import { useContext } from 'react';
// import { AccordionContext, Col, Container, Row } from 'react-bootstrap';

// function ContextAwareToggle({ children, eventKey, callback }) {
//   const { activeEventKey } = useContext(AccordionContext);

//   const decoratedOnClick = useAccordionButton(
//     eventKey,
//     () => callback && callback(eventKey),
//   );

//   const isCurrentEventKey = activeEventKey === eventKey;

//   return (
//     <center ><button

//       type="button"
//       style={{ backgroundColor: isCurrentEventKey ? '#82E0AA ' : 'lavender', borderRadius:'50px', width:'150px'}}
//       onClick={decoratedOnClick}

//     >
//       {children}
//     </button></center>
//   );
// }

// function Section2() {
//   return (
//     <Accordion defaultActiveKey="0">
//       <Card>
//         <Card.Header >
//           <ContextAwareToggle eventKey="0">Know more!</ContextAwareToggle>
//         </Card.Header>
//         <Accordion.Collapse eventKey="0">
//           <Card.Body>
//             <Container>
//                 <Row>
//                     <Col lg={6}>

//                     </Col>
//                     <Col lg={6}>

//                     </Col>
//                 </Row>
//             </Container>
//           </Card.Body>
//         </Accordion.Collapse>
//       </Card>

//     </Accordion>
//   );
// }



// export default Section2;

import React from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MDBBtn } from "mdb-react-ui-kit";
import Fab from "./FAB";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";


const Section2 = () => {
    const actions = [
        { label: "About", icon: <FcAbout />, onClick: console.log },
        { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
        { label: "Picture", icon: <FcCamera />, onClick: console.log },
        { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
      ];
  
    return (
        <Container>
            <Row>
                <li style={{ listStyle: 'none' }}>
                    <Link to="/murals"><MDBBtn color='#82E0AA'>
                    <span style={{color:'#82E0AA'}}><b>Murals</b></span>
                    </MDBBtn></Link>

                    <Link to="/graffiti"><MDBBtn color='dark' >
                        <span style={{color:'#82E0AA'}}><b>Graffiti</b></span>
                    </MDBBtn></Link>   
                </li>
            </Row>
        </Container>
    );
}
export default Section2;