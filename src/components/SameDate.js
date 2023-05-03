import { useState, useEffect } from 'react';

const SameDate = ({ timezone1, timezone2 }) => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const now = new Date().toLocaleString('en-US', { timeZone: timezone1 });
        setDate(new Date(now).toLocaleDateString());
    }, [timezone1]);

    useEffect(() => {
        const now = new Date().toLocaleString('en-US', { timeZone: timezone2 });
        setDate(new Date(now).toLocaleDateString());
    }, [timezone2]);

    if (timezone1!=timezone2) {
        return <span className='difday'>
            Different Day
        </span>;
    }
};

export default SameDate;