import React from "react";
import Fab from "./FAB";
import { FcAbout, FcBusinessman, FcCamera, FcFullTrash } from "react-icons/fc";
import { Container, Row } from "react-bootstrap";

const Section3 = () => {
    const actions = [
        { label: "About", icon: <FcAbout />, onClick: console.log },
        { label: "Profile", icon: <FcBusinessman />, onClick: console.log },
        { label: "Picture", icon: <FcCamera />, onClick: console.log },
        { label: "Trash", icon: <FcFullTrash />, onClick: console.log },
      ];
    return (
        <Container>
            <Row>
                <Fab />
            </Row>
            </Container>
    )
}
export default Section3;