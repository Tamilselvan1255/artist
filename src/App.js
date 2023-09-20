import React, {Fragment} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import { useMediaQuery } from "react-responsive";
import Murals from "./components/Murals";
import Graffiti from "./components/Graffiti";

function App() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width:1240px)'})
  const isTabletOrMobile = useMediaQuery({ query: '(max-width:1240px)'})
  const isPortrait = useMediaQuery({ query: '('})
  return(
    <div>
    <Fragment>
      <Router>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/murals" element={<Murals />} />
          <Route path="/graffiti" element={<Graffiti />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </Fragment>  
    </div>
    
  )
}

export default App;