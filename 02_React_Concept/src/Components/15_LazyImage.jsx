import React, { useEffect, useRef, useState } from 'react';
import placeholder from '../tinyPic.jpg';

export default function ImageList() {
    const images = Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `item${index}`,
        url: 'https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400',
    }));
    return (
        <div className='image-list'>
            {images.map((image) => (
                <LazyImage
                    key={image.id}
                    src={image.url}
                    alt={image.name}
                    placeholderSrc={placeholder}
                />
            ))}
        </div>
    );
}

function LazyImage({ src, alt, placeholderSrc }) {
    const [imageSrc, setImageSrc] = useState(placeholderSrc);
    const imageRef = useRef(null);

    useEffect(() => {
        let observer;
        let didCancel = false;

        const loadImage = async () => {
            const { current } = imageRef;
            if (current && src) {
                try {
                    const observerOptions = {
                        root: null,
                        threshold: 0.1,
                    };

                    observer = new IntersectionObserver((entries) => {
                        entries.forEach((entry) => {
                            if (
                                !didCancel &&
                                (entry.intersectionRatio > 0 || entry.isIntersecting)
                            ) {
                                setImageSrc(src);
                                observer.unobserve(current);
                            }
                        });
                    }, observerOptions);

                    observer.observe(current);
                } catch (error) {
                    console.error(error);
                    setImageSrc(src);
                }
            }
        };

        loadImage();

        return () => {
            didCancel = true;
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef.current);
            }
        };
    }, [src, imageRef]);

    return <img ref={imageRef} src={imageSrc} alt={alt} />;
}
