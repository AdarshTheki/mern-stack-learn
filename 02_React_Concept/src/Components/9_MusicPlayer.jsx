/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';

function MusicPlayer({ tracks = [] }) {
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [currentProgress, setCurrentProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef();

    const currentTrack = tracks[currentTrackIndex];

    useEffect(() => {
        if (isPlaying) {
            const timeout = setInterval(() => {
                setCurrentProgress(
                    (audioRef.current.currentTime / audioRef.current.duration) * 100
                );
            }, 500);
            return () => clearInterval(timeout);
        }
    }, [isPlaying]);

    const handlePlayPause = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handlePreviousTrack = () => {
        setCurrentProgress(0);
        setIsPlaying(false);
        setCurrentTrackIndex((currentTrackIndex - 1 + tracks.length) % tracks.length);
    };

    const handleNextTrack = () => {
        setCurrentProgress(0);
        setIsPlaying(false);
        setCurrentTrackIndex((currentTrackIndex + 1) % tracks.length);
    };

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <div className='music-player'>
            <h4>{currentTrack.title}</h4>
            <audio ref={audioRef} src={currentTrack.source}></audio>
            <div className='controls'>
                <button onClick={handlePreviousTrack}>{'prev'}</button>
                <button onClick={handlePlayPause}>{!isPlaying ? '◀' : '='}</button>
                <button onClick={handleNextTrack}>{'next'}</button>
            </div>
            <progress style={{ width: '100%' }} max='100' value={currentProgress}></progress>

            <p>
                {formatTime(audioRef.current?.currentTime || 0)} /{' '}
                {formatTime(audioRef.current?.duration || 0)}
            </p>
        </div>
    );
}

export default function Test() {
    const tracks = [
        {
            title: 'Track 1',
            source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
            image: 'https://via.placeholder.com/150',
        },
        {
            title: 'Track 2',
            source: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
            image: 'https://via.placeholder.com/150',
        },
        // Add more tracks as needed
    ];

    return <MusicPlayer tracks={tracks} />;
}
