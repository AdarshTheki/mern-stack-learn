import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Inputs, RTE, Select } from './index';
import { Services } from '../AppWrite/Services';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

// This is a Important Components AddPost

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || '',
            slug: post?.$id || '',
            content: post?.content || '',
            status: post?.status || 'active',
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        // If post edit then this login Run
        if (post) {
            const file = data.image[0] ? await Services.uploadFile(data.image[0]) : null;

            if (file) {
                Services.deleteFile(post?.featuredImage);
            }

            const dbPost = await Services.updatePost(post?.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await Services.uploadFile(data.image[0]);
            if (file) {
                const fileId = file.$id;
                // data.images = fileId;
                const dbPost = await Services.createPost({
                    ...data,
                    featuredImage: fileId,
                    userId: userData.$id,
                });
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                } else {
                    console.log('DB connection failed');
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === 'string')
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, '-')
                .replace(/\s/g, '-');

        return '';
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === 'title') {
                setValue('slug', slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className='flex flex-wrap'>
            <div className='w-2/3 px-2'>
                <Inputs
                    label='Title :'
                    placeholder='Title'
                    className='mb-4'
                    {...register('title', { required: true })}
                />
                <Inputs
                    label='Slug :'
                    placeholder='Slug'
                    className='mb-4'
                    {...register('slug', { required: true })}
                    onInput={(e) => {
                        setValue('slug', slugTransform(e.currentTarget.value), {
                            shouldValidate: true,
                        });
                    }}
                />
                <RTE
                    label='Content :'
                    name='content'
                    control={control}
                    defaultValue={getValues('content')}
                />
            </div>
            <div className='w-1/3 px-2'>
                <Inputs
                    label='Featured Image :'
                    type='file'
                    className='file-input file-input-bordered file-input-primary p-2'
                    accept='image/png, image/jpg, image/jpeg, image/gif'
                    {...register('image', { required: !post })}
                />
                {post && (
                    <div className='w-full mb-4'>
                        <img
                            src={Services.getFilePreview(post?.featuredImage)}
                            alt={post?.title}
                            className='rounded-lg'
                        />
                    </div>
                )}
                <Select
                    options={['active', 'inactive']}
                    label='Status'
                    className='my-4'
                    {...register('status', { required: true })}
                />
                <Button
                    type='submit'
                    bgColor={post ? 'bg-green-500' : undefined}
                    className='w-full'>
                    {post ? 'Update' : 'Submit'}
                </Button>
            </div>
        </form>
    );
}
