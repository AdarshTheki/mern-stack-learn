/* eslint-disable react/prop-types */
import React from 'react';
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    Input,
} from '@material-tailwind/react';

export default function DialogDefault({ leftIcon, rightIcon, name = '', className = '' }) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(!open);

    return (
        <>
            <Button
                variant='gradient'
                color='blue'
                onClick={handleOpen}
                className={`flex capitalize items-center justify-center gap-2 ${className}`}>
                {leftIcon && leftIcon}
                {name}
                {rightIcon && rightIcon}
            </Button>
            <Dialog open={open} handler={handleOpen}>
                <DialogHeader className='bg-primary font-medium text-base text-white rounded-t'>
                    Enquire Now
                </DialogHeader>
                <DialogBody className=' space-y-5'>
                    <img src='/logo.png' alt='logo_png' width={300} className='mx-auto mb-5' />
                    <div className='grid sm:grid-cols-2 gap-4'>
                        <Input color='blue' size='md' label='Name*' />
                        <Input color='blue' size='md' label='Mobile*' />
                    </div>
                    <Input color='blue' size='md' label='Email (Optional)' />
                    <label htmlFor='checkbox' className='inline-flex items-start gap-2'>
                        <input type='checkbox' name='checkbox' id='checkbox' defaultChecked />
                        <p className='text-small'>
                            I Consent to The Processing of Provided Data According To Privacy Policy
                            | Terms & Conditions, I Authorize Prop Solutions 4 U Pvt. Ltd. and its
                            representatives to Call, SMS, Email or WhatsApp Me About Its Products
                            and Offers. This Consent Overrides Any Registration For DNC/NDNC.
                        </p>
                    </label>
                </DialogBody>
                <DialogFooter>
                    <Button variant='text' color='red' onClick={handleOpen} className='mr-1'>
                        <span>Cancel</span>
                    </Button>
                    <Button className='bg-primary' onClick={handleOpen}>
                        <span>Confirm</span>
                    </Button>
                </DialogFooter>
            </Dialog>
        </>
    );
}
