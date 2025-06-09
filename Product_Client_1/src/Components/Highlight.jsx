import React, { useState } from 'react';
import { data } from '../utils';

const Highlight = () => {
    const [selected, setSelected] = useState(1);

    const currentData = data.filter((item) => item.id === selected)[0];

    const { contact, id, image, name, descriptions, price, pricing, services } = currentData;

    return (
        <div className='text-gray-900 sm:text-lg space-y-5 sm:px-10 px-5 pb-5'>
            <h1 className='section-title' id='highlights'>
                Highlight
            </h1>
            <div className='grid md:grid-cols-2 gap-5'>
                <section>
                    <h1 className='text-2xl font-bold'>{name}</h1>
                    <h4 className='font-semibold text-xl py-3'>{price}</h4>
                    <p>{descriptions}</p>
                </section>
                <img
                    src={image}
                    alt={'logo' + id}
                    id={name}
                    width={500}
                    className='object-contain max-h-[250px]'
                />
            </div>
            <section>
                <h2 className='font-semibold text-xl mb-2'>Our Services:</h2>
                <ul className='list-item list-inside'>
                    {services.map((item) => (
                        <li key={item} className='list-disc'>
                            {item}
                        </li>
                    ))}
                </ul>
            </section>
            <section>
                <h2 className='font-semibold text-xl'>Pricing:</h2>
                <p className='p-2'>{pricing}</p>
            </section>
            <section>
                <h2 className='font-semibold text-xl'>Contact Us:</h2>
                <p className='p-2'>{contact.description}</p>
            </section>
            <section>
                <p>📞 Phone: {contact.phone}</p>
                <p>📧 Email: {contact.email}</p>
                <p>🌎 Website: {contact.website}</p>
            </section>
            <h2 className='font-bold text-xl capitalize'>Other products in this category</h2>
            <div className='flex flex-wrap gap-5'>
                {data.map((item) => (
                    <a
                        href='#highlights'
                        onClick={() => setSelected(item.id)}
                        key={item.id}
                        className='w-[200px] border border-primary rounded-2xl overflow-hidden cursor-pointer duration-300 hover:shadow-xl'>
                        <img src={item.image} alt={'logo' + item.id} className='h-[130px] w-full' />
                        <div className='p-3'>
                            <h3 className='font-semibold text-lg line-clamp-2'>{item.name}</h3>
                            <p>{item.price}</p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Highlight;
