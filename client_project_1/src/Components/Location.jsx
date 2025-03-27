import React, { useState } from 'react';
import { Button } from '@material-tailwind/react';
import { MapPin } from 'lucide-react';

const locations = [
    {
        id: 1,
        title: 'Education',
        data: [
            "Bishop's School (15 KM)",
            'Podar International School (4.5 KM)',
            'Leiston School (4.5 KM)',
            'Holy Angels School (1.7 KM)',
            'Oxford World School',
            'Victorious Kids Educare 30',
            'Zanzur International School (5 KM)',
        ],
    },
    {
        id: 2,
        title: 'Healthcare',
        data: [
            'Lifeline Hospital (5 KM)',
            'Noble Hospital (10 KM)',
            'Motherhood Hospital (4 KM)',
            'Hyatt Regency (9 KM)',
        ],
    },
    {
        id: 3,
        title: 'Malls/ Hotels/ Shopping centers',
        data: [
            'Westin Hotel (11 KM)',
            'Novotel (9 KM)',
            'Decathlon Waghol (7 KM)',
            'Lounge Fly High (4.2 KM)',
            'Phoenix Mall (4 KM)',
            'Reliance Mart (5.5 KM)',
            'Samara Mall (10 KM)',
        ],
    },
    {
        id: 4,
        title: 'Tech Business Park',
        data: [
            'CON IT Park (5 KM)',
            'EM IT Park (5 KM)',
            'Hogapatta IT Park (12 KM)',
            'Hindisagar Industrial Park (3.5 KM)',
        ],
    },
];

const Location = () => {
    const [select, setSelect] = useState(1);

    const filterData = locations.filter((item) => item.id === select)[0];

    return (
        <div className='p-5'>
            <h2 className='section-title' id='connectivity'>
                Location Advantage
            </h2>
            <div className='sm:flex gap-5'>
                <iframe
                    className='w-full lg:h-[30vw] h-[300px] mb-5'
                    src='https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3919.784568202982!2d79.06706690964992!3d21.131262211177418!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sen!2sin!4v1729001223179!5m2!1sen!2sin'
                    allowfullscreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'></iframe>
                <iframe
                    className='w-full lg:h-[30vw] h-[300px] mb-5'
                    src='https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d2935.4973861017015!2d79.10463257526088!3d21.18284898050528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDEwJzU4LjMiTiA3OcKwMDYnMjYuMCJF!5e1!3m2!1sen!2sin!4v1729001382272!5m2!1sen!2sin'
                    allowfullscreen=''
                    loading='lazy'
                    referrerPolicy='no-referrer-when-downgrade'></iframe>
            </div>
            <div className='flex flex-wrap'>
                {locations.map((item) => (
                    <Button
                        className={`m-1 flex-auto capitalize text-sm font-medium ${
                            item.id === select ? 'bg-primary' : 'bg-secondary'
                        }`}
                        key={item.id}
                        onClick={() => setSelect(item.id)}>
                        {item.title}
                    </Button>
                ))}
            </div>
            <ul className='py-5 sm:px-10 px-2 text-gray-800 font-medium border border-secondary'>
                {filterData &&
                    filterData.data.length > 1 &&
                    filterData.data.map((location) => (
                        <li key={location} className='flex gap-4 items-center py-1'>
                            <MapPin fill='#000' color='#fff' size={24} /> {location}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default Location;
