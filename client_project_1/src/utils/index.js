import Button from './Button';
import useScreenSize from './useScreenSize';
import SliderImage from './SliderImage';

export const data = [
    {
        id: 1,
        image: '/post_designer.png',
        name: 'Website Design & Development',
        price: '₹15,000.00',
        descriptions:
            'We specialize in creating stunning, user-friendly websites that not only look great but also drive results. Our team of experienced designers and developers is dedicated to bringing your vision to life and ensuring your online presence stands out from the competition.',
        services: [
            'Custom Website Design',
            'Responsive Web Development',
            'E-commerce Solutions',
            'Content Management Systems (CMS)',
            'Website Maintenance and Support',
            'SEO-Optimized Design',
            'Web Application Development',
        ],
        pricing:
            'We offer competitive pricing plans tailored to fit your specific needs and budget. Whether you need a simple website or a complex e-commerce platform, we provide solutions that offer great value and ROI.',
        contact: {
            description:
                'Ready to take your online presence to the next level? Contact us today to discuss your website design and development needs and discover how we can help you achieve your business goals.',
            phone: '+91 77199 71779',
            email: 'adarshverma549@gmail.com',
            website: 'adarshtheki.com',
        },
    },
    {
        id: 2,
        name: 'BPO Services',
        image: '/post_bpo.jpg',
        price: '₹12,000.00',
        descriptions:
            'We offer comprehensive Business Process Outsourcing (BPO) services designed to streamline your operations, reduce costs, and improve overall productivity. Our dedicated team of professionals is committed to delivering high-quality solutions that align with your business objectives and drive tangible results.',
        services: [
            'Customer Support Outsourcing',
            'Technical Support Outsourcing',
            'Data Entry and Data Processing',
            'Virtual Assistant Services',
            'Back Office Support',
            'Multilingual Support',
            'Quality Assurance and Monitoring',
        ],
        pricing:
            'We offer flexible pricing plans tailored to your specific BPO needs and budget. Whether you are a small business or a large enterprise, we provide scalable solutions that deliver value and efficient',
        contact: {
            description:
                'Ready to optimize your business processes with our BPO services? Contact us today to discuss your requirements and explore how we can help you achieve your goals.',
            phone: '+91 77199 71779',
            email: 'adarshverma549@gmail.com',
            website: 'adarshtheki.com',
        },
    },
    {
        id: 3,
        name: 'Android Development | Software Development',
        image: '/post_web.png',
        price: '₹80,000.00',
        descriptions:
            'At heoweb, we specialize in developing innovative, user-friendly apps and software that not only meet your business needs but also exceed your expectations. Our team of skilled developers is dedicated to turning your ideas into reality and ensuring your digital solutions stand out in the market.',
        services: [
            'Custom Mobile App Development',
            'Cross-Platform App Development',
            'Enterprise Software Solutions',
            'Cloud-Based Applications',
            'Software Maintenance and Support',
            'API Development and Integration',
            'UX/UI Design',
        ],
        pricing:
            "We offer flexible pricing plans tailored to your specific requirements and budget. Whether you're a startup or an established enterprise, we provide solutions that offer excellent value and ROI.",
        contact: {
            description:
                'Contact us today to discuss your project needs and discover how we can help you achieve your goals.',
            phone: '+91 77199 71779',
            email: 'adarshverma549@gmail.com',
            website: 'adarshtheki.com',
        },
    },
];

export { Button, useScreenSize, SliderImage };
