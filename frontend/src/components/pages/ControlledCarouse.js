import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
   const [index, setIndex] = useState(0);

   const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
   };

   return (
      <Carousel activeIndex={index} onSelect={handleSelect} variant='dark'>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={`${process.env.PUBLIC_URL}/assets/showcase-8.jpg`}
               alt="First slide"
               height={400}
            />
            <Carousel.Caption>
               <h1 className='text-light text-uppercase'
                  style={{ fontSize: '3rem' }}
               >
                  work with an amazing team
               </h1>
               <p className='text-light'
                  style={{ fontSize: '1.5rem' }}
               >
                  working alongside with an amazing is our company's duty to make workers as they are at home
               </p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={`${process.env.PUBLIC_URL}/assets/showcase-7.jpg`}
               alt="Second slide"
               height={400}
            />

            <Carousel.Caption>
               <h1 className='text-light text-uppercase'
                  style={{ fontSize: '3rem' }}
               >
                  work with an amazing team
               </h1>
               <p className='text-light'
                  style={{ fontSize: '1.5rem' }}
               >
                  working alongside with an amazing is our company's duty to make workers as they are at home
               </p>
            </Carousel.Caption>
         </Carousel.Item>
         <Carousel.Item>
            <img
               className="d-block w-100"
               src={`${process.env.PUBLIC_URL}/assets/showcase-6.jpg`}
               alt="Third slide"
               height={400}
            />

            <Carousel.Caption>
               <h1 className='text-light text-uppercase'
                  style={{ fontSize: '3rem' }}
               >
                  work with an amazing team
               </h1>
               <p className='text-light'
                  style={{ fontSize: '1.5rem' }}
               >
                  working alongside with an amazing is our company's duty to make workers as they are at home
               </p>
            </Carousel.Caption>
         </Carousel.Item>
      </Carousel>
   );
}
export default ControlledCarousel
// render(<ControlledCarousel />);