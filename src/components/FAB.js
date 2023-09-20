import React, { useState } from "react";
import "../App.css";
import { Box } from "@mui/material";
import { CSSTransition } from "react-transition-group";
import IconButton from "@mui/material/IconButton";
import FollowTheSignsIcon from '@mui/icons-material/FollowTheSigns';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function FAB() {
  const [open, setOpen] = useState(true);
  const [selected, setSelected] = useState("default");

  const onPressButton = async (selectedVal) => {
    setSelected(selectedVal);
    setOpen(false);
  };

  React.useEffect(() => {
    console.log("you bookmarkd word as =>", );
  }, []);

  return (
    <Box>
      <CSSTransition
        in={open}
        // timeout={() => isopen}
        // classNames="alert"
        unmountOnExit
      >
        <Box>
          <Box
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: "45%",
              right: "13%"
            }}
          >
            <IconButton
              aria-label="Instagram-hard"
              sx={[
                {
                  position: "absolute",
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  justifyContent: "center",
                  backgroundColor: "#5CDCDC",
                  alignItems: "center"
                }
              ]}
              onClick={() => onPressButton("easy")}
            >
            <a href="https://www.instagram.com/" ><InstagramIcon sx={{ fontSize: 20, color: "#000 " }} /></a>
            </IconButton>
          </Box>
          <Box
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: "35%",
              right: "13%"
            }}
          >
            <IconButton
              aria-label="FacebookOutlined-hard"
              sx={[
                {
                  position: "absolute",
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  justifyContent: "center",
                  backgroundColor: "#5CDC62",
                  alignItems: "center"
                }
              ]}
              onClick={() => onPressButton("Medium")}
            >
              <a href="https://www.facebook.com/"><FacebookOutlinedIcon sx={{ fontSize: 20, color: "#000 " }} /></a>
            </IconButton>
          </Box>
          <Box
            style={{
              alignItems: "center",
              position: "absolute",
              bottom: "25%",
              right: "13%"
            }}
          >
            <IconButton
              aria-label="Twitter-hard"
              sx={[
                {
                  position: "absolute",
                  width: 30,
                  height: 30,
                  borderRadius: 15,
                  justifyContent: "center",
                  backgroundColor: "#E361EA",
                  alignItems: "center"
                }
              ]}
              onClick={() => onPressButton("Hard")}
            >
              <a href="https://twitter.com/"> <TwitterIcon sx={{ fontSize: 20, color: "#000 " }} /></a>
            </IconButton>
          </Box>
        </Box>
      </CSSTransition>
      <Box
        style={{
          alignItems: "center",
          position: "absolute",
          justifyContent:'center',
          alignItems:'center'
        }}
      >
        <IconButton
          aria-label="Filter"
          sx={{
            position: "absolute",
            width: 30,
            height: 30,
            borderRadius: 15,
            justifyContent: "center",
            backgroundColor: "white",
            alignItems: "center"
          }}
          onClick={() => setOpen(!open)}
        >
          <FollowTheSignsIcon sx={{ fontSize: 45, color: "#000 " }} />
        </IconButton>
      </Box>
    </Box>
  );
}
