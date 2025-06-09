import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { useSelector } from 'react-redux';
import { Services } from '../AppWrite/Services';
import { Button, Container } from '../Components/index';
import blur from '../assets/blur.jpg';

export default function Post() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      Services.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate('/');
      });
    } else navigate('/');
  }, [slug, navigate]);

  const deletePost = () => {
    Services.deletePost(post.$id).then((status) => {
      if (status) {
        Services.deleteFile(post.featuredImage);
        navigate('/');
      }
    });
  };

  return post ? (
    <div className='py-8'>
      <Container>
        <div className='card sm:card-side bg-base-100 shadow-xl'>
          <figure className='sm:w-1/2'>
            <img
              className='sm:w-full'
              src={post?.featuredImage ? Services.getFilePreview(post.featuredImage) : blur}
              alt={post?.title}
            />
          </figure>
          <div className='card-body'>
            <h2 className='card-title'>{post?.title}</h2>
            <h3>{parse(post.content)}</h3>
            <div className='card-actions justify-end'>
              {isAuthor && (
                <div className=''>
                  <Link to={`/edit-post/${post.$id}`}>
                    <Button className='mr-3 btn btn-primary'>Edit</Button>
                  </Link>
                  <Button onClick={deletePost} bgColor='btn-error'>
                    Delete
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
