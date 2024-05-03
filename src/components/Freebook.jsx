import React from 'react'
import list from '../../public/list.json'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from './Cards';


function Freebook() {

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  const filterData = list.filter((data) =>
      data.category === "Free"
  );
  console.log(filterData);

  return (
    <div className='max-w-screen-2xl container mx-auto md:px-20 p-4' >
        <div>
        <h1 className='font-semibold text-xl pb-2' >Free Offered Courses</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui odio eaque sint pariatur numquam, optio ipsum dolores commodi aperiam ipsam?</p>
        </div>
    <div>
      <div className="slider-container">
      <Slider {...settings}>
        {filterData.map((item) => (
          <Cards item={item} key={item.id}/>
        ))} 
      </Slider>
      </div>
    </div>
    </div>
  )
}

export default Freebook
