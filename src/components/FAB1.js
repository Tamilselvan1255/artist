import React from "react";
import {Container, button, Link} from 'react-floating-action-button';
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import { Button } from "reactstrap";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

const FAB1 = () => {
    return (
        <Container>
            <Link><a href="https://www.instagram.com/" ><InstagramIcon sx={{ fontSize: 20, color: "#000 "}} /></a></Link>
            <Link><a href="https://www.facebook.com/" ><FacebookOutlinedIcon sx={{ fontSize: 20, color: "#000 "}} /></a></Link>
            <Link><a href="https://twitter.com/" ><TwitterIcon sx={{ fontSize: 20, color: "#000 "}} /></a></Link>
                
            <Button style={{backgroundColor:'inherit', alignItems:'center', }}>
            <FollowTheSignsIcon sx={{ fontSize: 45, color: "#000 " }} />
                </Button>
        </Container>
    )
}
export default FAB1;