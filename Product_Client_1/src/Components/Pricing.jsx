import React from 'react';
import { Button } from '../utils';

const Pricing = () => {
    return (
        <div className='sm:p-5 p-2 bg-gray-100'>
            <h2 className='section-title' id='sc-price'>
                Area Pricing
            </h2>
            <table className='sm:table grid text-center text-lg w-full !border border-primary rounded-3xl overflow-hidden'>
                <thead className='sm:table-header-group hidden'>
                    <tr className='text-xl text-white bg-secondary'>
                        <th className='py-4' scope='col'>
                            Type
                        </th>
                        <th className='py-4' scope='col'>
                            Area
                        </th>
                        <th className='py-4' scope='col'>
                            Price (All-incl.)
                        </th>
                        <th className='py-4' scope='col'></th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='grid sm:table-row'>
                        <td colSpan='4' className='py-4 bg-primary-light'>
                            <strong> Godrej Park Springs </strong>
                        </td>
                    </tr>
                    <tr className='bg-white grid sm:table-row'>
                        <td className='sm:py-4'>2 BHK</td>
                        <td className='sm:py-4'>610 - 620 Sq.ft</td>
                        <td className='sm:py-4'>₹ 76.50 Lacs*</td>
                        <td className='py-4'>
                            <Button name='Complete Costing Details' className='mx-auto' />
                        </td>
                    </tr>
                    <tr className='bg-gray-300 grid sm:table-row'>
                        <td className='sm:py-4'>3 BHK</td>
                        <td className='sm:py-4'>800 Sq.ft</td>
                        <td className='sm:py-4'>₹ 1 Cr*</td>
                        <td className='py-4'>
                            <Button name='Complete Costing Details' className='mx-auto' />
                        </td>
                    </tr>
                    <tr className='grid sm:table-row'>
                        <td colSpan='4' className='py-4 bg-primary-light'>
                            <strong> Godrej Urban Retreat </strong>
                        </td>
                    </tr>
                    <tr className='bg-white grid sm:table-row'>
                        <td className='sm:py-4'>2 BHK</td>
                        <td className='sm:py-4'>787 Sq.ft</td>
                        <td className='sm:py-4'>On Request</td>
                        <td className='py-4'>
                            <Button name='Complete Costing Details' className='mx-auto' />
                        </td>
                    </tr>
                    <tr className='grid sm:table-row'>
                        <td colSpan='4' className='py-4 bg-primary-light'>
                            <strong> Godrej Rivercrest </strong>
                        </td>
                    </tr>
                    <tr className='bg-white grid sm:table-row'>
                        <td className='sm:py-4'>3 BHK</td>
                        <td className='sm:py-4'>1393 - 1493 Sq.ft</td>
                        <td className='sm:py-4'>On Request</td>
                        <td className='py-4'>
                            <Button name='Complete Costing Details' className='mx-auto' />
                        </td>
                    </tr>
                    <tr className='bg-gray-300 grid sm:table-row'>
                        <td className='sm:py-4'>4 BHK</td>
                        <td className='sm:py-4'>1726 Sq.ft</td>
                        <td className='sm:py-4'>On Request</td>
                        <td className='py-4'>
                            <Button name='Complete Costing Details' className='mx-auto' />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Pricing;
