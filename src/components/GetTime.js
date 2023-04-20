import { useState, useEffect } from 'react';
import Skeleton from './Skeleton';

const GetTime = ({ timezone }) => {
    const [time, setTime] = useState('');

    useEffect(() => {
        const intervalId = setInterval(() => {
            if (timezone) {
                const now = new Date().toLocaleTimeString('en-US', { timeZone: timezone });
                setTime(now);
            }
        }, 1000);

        return () => clearInterval(intervalId);
    }, [timezone]);

    return <span>{time}</span>;
};

export default GetTime;
