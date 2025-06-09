import React, { useState } from 'react';
import { Button as ButtonModal } from '../utils';
import { Input, Button } from '@material-tailwind/react';
import { MailCheck, Phone, Send, SquareArrowOutUpRight } from 'lucide-react';

const SideBar = () => {
    const [formData, setFormData] = useState({ name: '', phone: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted', formData);
        setFormData({ name: '', phone: '' });
    };

    return (
        <div className='px-6 text-gray-light'>
            <ButtonModal
                leftIcon={<SquareArrowOutUpRight size={20} />}
                name='Schedule Site Visit'
                className='w-full my-2 !py-2'
            />
            <ButtonModal
                leftIcon={<Phone size={20} />}
                name='+917719971779'
                className='w-full !py-2'
            />
            <h2 className='text-xl font-bold py-2 mt-5 text-center'>
                Pre-Register here for Best Offers
            </h2>
            <form className='text-base space-y-4' onSubmit={handleSubmit}>
                <Input
                    variant='standard'
                    color='blue'
                    label='Name'
                    name='name'
                    placeholder='Enter Your Name Here'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <Input
                    variant='standard'
                    color='blue'
                    label='Phone'
                    placeholder='Enter Your Phone Number'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    required
                />
                <label htmlFor='checkbox2' className='inline-flex items-start gap-2'>
                    <input type='checkbox' name='checkbox' id='checkbox2' defaultChecked />
                    <p className='text-small'>
                        I Consent to The Processing of Provided Data According To Privacy Policy |
                        Terms & Conditions, I Authorize Prop Solutions 4 U Pvt. Ltd. and its
                        representatives to Call, SMS, Email or WhatsApp Me About Its Products and
                        Offers. This Consent Overrides Any Registration For DNC/NDNC.
                    </p>
                </label>
                <Button
                    type='submit'
                    color='blue'
                    variant='gradient'
                    className='flex items-center gap-2'>
                    Pre-Registration Now
                    <Send size={20} />
                </Button>
            </form>
            <ul className='flex mt-10 mb-4 gap-6 items-center text-center text-lg font-medium leading-none'>
                <li>
                    <img src='/call.webp' alt='call' width={40} className='mx-auto' />
                    <p>Instant Call Back</p>
                </li>
                <li>
                    <img src='/car.webp' alt='car' width={40} className='mx-auto' />
                    <p>Free Site Visit</p>
                </li>
                <li>
                    <img src='/pay.webp' alt='pay' width={40} className='mx-auto' />
                    <p>Best Price</p>
                </li>
            </ul>
            <ButtonModal
                leftIcon={<MailCheck size={20} />}
                name='Request Call Back'
                className='py-2 w-full'
            />
        </div>
    );
};
export default SideBar;
