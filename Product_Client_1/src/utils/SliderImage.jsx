/* eslint-disable react/prop-types */
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlider = ({ images = [] }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            { breakpoint: 1440, settings: { slidesToShow: 4, slidesToScroll: 4 } },
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2, slidesToScroll: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <div className='p-4'>
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className='relative px-1'>
                        <img
                            src={image.src}
                            alt={`slide-${index}`}
                            style={{ width: '100%', height: 'auto' }}
                        />
                        <p className='amenities_p'>{image.title}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default ImageSlider;
