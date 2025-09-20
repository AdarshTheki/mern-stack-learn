/* eslint-disable react/prop-types */
import React from 'react';

/*
@keyframe svgStyle {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
    */
/*
   @keyframe circleTwo{
       0% {
           stroke-dasharray: 1, 400;
           stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -100;
        }
        100% {
            stroke-dasharray: 400, 400;
            stroke-dashoffset: -260;
        }
    }
    */
function Loader({ strokeWidth = '10px', svgSize = '48px', strokeColor = 'red' }) {
    const svgStyle = {
        width: svgSize,
        height: svgSize,
        animation: '2s linear 0s infinite normal none running svgStyle',
    };
    const colorCircle = {
        fill: 'transparent',
        stroke: 'rgb(237, 235, 233)',
    };
    const backgroundCircle = {
        fill: 'transparent',
        stroke: strokeColor,
        animation: '1.5s linear 0s infinite normal none running circleTwo',
    };
    return (
        <svg viewBox='0 0 100 100' style={svgStyle}>
            <circle cx='50' cy='50' r='42' strokeWidth={strokeWidth} style={colorCircle}></circle>
            <circle
                cx='50'
                cy='50'
                r='42'
                strokeWidth={strokeWidth}
                style={backgroundCircle}></circle>
        </svg>
    );
}

export default function Test() {
    return (
        <div>
            <Loader strokeWidth='5px' svgSize='160px' strokeColor='green' />
            <Loader strokeWidth='10px' svgSize='60px' strokeColor='red' />
            <Loader strokeWidth='15px' svgSize='140px' strokeColor='blue' />
            <Loader strokeWidth='6px' svgSize='30px' strokeColor='black' />
        </div>
    );
}
