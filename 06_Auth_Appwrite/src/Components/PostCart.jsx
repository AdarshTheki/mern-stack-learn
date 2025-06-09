import React from 'react';
import { Services } from '../AppWrite/Services';
import { Link } from 'react-router-dom';
import blur from '../assets/blur.jpg';

// 23
export default function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className='card grid bg-base-100 shadow-xl hover:opacity-80'>
            <figure>
                <img
                    src={featuredImage ? Services?.getFilePreview(featuredImage) : blur}
                    className='sm:h-[20vw] h-[200px] object-cover w-full'
                    alt={title}
                />
            </figure>
            <div className='p-4'>
                <h2 className='text-lg font-medium capitalize'>{title}</h2>
            </div>
        </Link>
    );
}
