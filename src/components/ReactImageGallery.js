import React, { useState } from "react";
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const images =  [ 
    require("../assets/c1.jpg"),
    require("../assets/c2.jpg"),
   
    require("../assets/graffiti1.jpg"),
    
    require("../assets/graffiti2.jpg"),
    require("../assets/graffiti3.jpg"),
    require("../assets/c3.jpg"),
    require("../assets/graffiti4.jpg"),
    require("../assets/c4.jpg"),
    require("../assets/graffiti5.jpg"),
    
    require("../assets/graffiti6.jpg"),
    require("../assets/graffiti2.jpg"),
    require("../assets/graffiti2.jpg"),
    require("../assets/graffiti2.jpg"),      
]
const ReactImageGallery = () => {
    const [data, setData] = useState({img: '', i:0})

    const viewImage = (img, i) => {
        setData({img, i})
    } 
    const imgAction = (action) => {
        let i = data.i;
        if(action === 'next-img'){
            setData({img: images[i + 1], i: i + 1});
            }
        
        if(action === 'previous-img'){
            setData({img: images[i - 1], i: i - 1})
        }

        if(!action){
            setData({img: '', i: 0});
        }
    
    }

    return (
        <>
        {data.img &&
            <div style={{
                width:'100%',
                height:'80%',
                background:'black',
                position:'fixed',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                overflow:'hidden',
            }}>
                <button onClick={()=> imgAction()} style={{position:'absolute', top: 0, right:0}}>X</button>
               <button onClick={()=> imgAction('previous-img')}>Previous</button>
                <img src={data.img} style={{width:'50%', maxWidth:'100%', maxHeight:'100%'}}/>
                <button onClick={()=> imgAction('next-img')}>Next</button>

            </div> }
         <div style={{padding:'20px'}}>
        <ResponsiveMasonry
        columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
       
        <Masonry gutter="20px">
            {images.map((image, i) => (
                <img
                    key={i}
                    src={image}
                    style={{width: "100%", display: "block", cursor:'pointer'}}
                    alt=""
                    onClick={()=> viewImage(image, i)}
                />
            ))}
        </Masonry>
        
       
    </ResponsiveMasonry>
    </div>
    </>
    );
}
export default ReactImageGallery;