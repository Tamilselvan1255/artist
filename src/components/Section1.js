import React from "react";
import { Accordion, Col, Container, Row } from "react-bootstrap";
import FAB1 from "./FAB1";
import Section2 from "./Section2";
import Section3 from "./Section3";


const Section1 = () => {
    
    return(
        <div>
            <Container>
                <Row>
                    <Col lg={5} className="section1">
                        <img style={{width:'60%'}} src={require("../assets/dq1.png")} />
                    </Col>
                    <Col lg={7} className="section1">
                        <p style={{fontSize:'30px', color:'#7B7D7D ', paddingBlockStart:'60px'}}>
                       “<span style={{color:'#E74C3C ', fontSize:'35px'}}>The Artist</span>’s  <i>Biography serves to provide the reader with a story about you as an artist and learn about your career credentials.” - Renee Phillips</i>
                       <p style={{paddingBlockStart:'15px', paddingInlineStart:'18%'}}><Section2 /></p></p>
                       {/* <p style={{paddingInlineStart:'80%'}}><Section3 /></p> */}
                       {/* <FAB1 /> */}
                       
                       {/* <p><Section3 /></p> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default Section1;