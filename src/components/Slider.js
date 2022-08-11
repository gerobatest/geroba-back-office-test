import {useState, useEffect} from 'react';
import {AiOutlineArrowLeft, AiOutlineArrowRight} from "react-icons/ai";
import {sliderData} from "./data-slider";
import '../style/Slider.scss';

function Slider() {

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideLength = sliderData.length;

  const autoScroll = true;
  let slideInterval;
  let intervalTime = 5000;

  const nextSlide = () => {
      setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);

  };
  const prevSlide = () => {
      setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);

  };

  function auto () {
      slideInterval = setInterval(nextSlide, intervalTime)
  }
  
  useEffect(() =>{
      setCurrentSlide(0)
  }, [])

  useEffect(() =>{
      if (autoScroll){
          auto();
      }
      return () => clearInterval(slideInterval);
  }, [currentSlide]);


  const moveDot = index => {
     setCurrentSlide(index)
  }

  return (
    <div className='slider'>
      
        <AiOutlineArrowLeft className = "arrow prev"
            onClick={prevSlide}
        />
        <AiOutlineArrowRight className = "arrow next" 
            onClick={nextSlide}
        />

        {sliderData.map((slide, index) =>{
            return(     
                <div className={index === currentSlide ?
                  "slide current" : "slide"} key = {index}>
                    
                      {index === currentSlide && (
                          <>
                              <img src={slide.image} alt="slide"/>
                              <div className='contenue'>
                                  <h2>{slide.heading}</h2>
                                  <p>{slide.desc}</p>
                              </div>
                          </>          
                      )}
                  </div>         
             ) 
        })}

        <div className='textslide'>
            <h1>GESTION </h1>
            <h1>ROUTES</h1>
            <h1> BÂTIMENTS</h1>
        </div>
        
        <div className='container-dots' /*point slide*/> 
            {Array.from({length: 3}).map((item, index,) => (
                <div key={index}
                onClick={() => moveDot(index + 0)}
                className={currentSlide === index + 0? "dot active" : "dot"}></div>
            ))}
        </div>
    </div>   
  )
}

export default Slider