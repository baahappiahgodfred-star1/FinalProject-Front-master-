import { useEffect, useRef, useState } from "react";
import "../styles/homeslider.css";
import { nextImage, prevImage } from "../utils/sliderControllers";
const myImages = [
  "./unnamed.png",
  "./ecommerce-wizishop.jpg",
  "e_commerce_Marketing_Report.jpg",
];

function HomeSlider() {

const timeOut=useRef()
  const [image, setImage] = useState(0);
  useEffect(() => {
     timeOut.current = setInterval(() => {
        setImage((state) => {
       return state===2?0:state+1
      })}, 3000);
    return () => {
      clearInterval(timeOut.current);
    };
  }, []);



  return (
<>
<h1 className="welcome-message">welcome to our shop</h1>
    <div className="home-slider-container"> 
   
      <div className="slider" style={{transform:`translateX(-${image*90}vw)`}}>
        {myImages.map((img) => {
          return <img src={img} alt="" />;
        })}
      </div>

        <div className="buttons">
            <p onClick={nextImage(image, setImage ,timeOut)}>{"<"}</p>
            <p onClick={prevImage(image, setImage,timeOut)}>{">"}</p>
        </div>
    </div>
   </>

  );
}

export default HomeSlider;
