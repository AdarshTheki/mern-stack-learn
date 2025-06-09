import React, { useEffect, useState } from 'react';
import { Services } from '../AppWrite/Services';
import { Container, PostCart } from '../Components/index';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        Services.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
                setLoading(false);
            }
        });
    }, []);

    if (loading) return <h2 className='text-center py-10'>Loading...</h2>;

    if (posts.length === 0) {
        return (
            <div className='w-full py-8 mt-4 text-center'>
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold text-white capitalize'>
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        );
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='grid gap-2 sm:grid-cols-4 grid-cols-2'>
                    {posts &&
                        posts.map((post) => (
                            <div key={post.$id} className=''>
                                <PostCart {...post} />
                            </div>
                        ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
