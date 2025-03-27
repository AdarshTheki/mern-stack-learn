import { Button, SliderImage } from '../utils';

const images = [
    { id: 1, title: 'Fitness Zone', src: '/Fitness Zone.webp' },
    { id: 2, title: 'Multi Purpose Hall', src: '/Multi Purpose Hall.webp' },
    { id: 3, title: 'Swimming Pool', src: '/Swimming Pool.webp' },
    { id: 4, title: 'Kids Play Area', src: '/Kids Play Area.webp' },
    { id: 5, title: 'Open Air Theatre', src: '/Open Air Theatre.webp' },
    { id: 6, title: 'Terrace Club', src: '/Terrace Club.webp' },
    { id: 7, title: 'Vertical Garden', src: '/Vertical Garden.webp' },
];

const Amenities = () => {
    return (
        <div className='py-5'>
            <h2 className='section-title' id='amenities'>
                Luxurious Amenities
            </h2>
            <SliderImage images={images} />
            <Button name='request all Amenities' className=' mx-auto my-5' />
        </div>
    );
};

export default Amenities;
