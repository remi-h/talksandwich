import { useState, useEffect } from 'react';

const GetDate = ({ timezone }) => {
    const [date, setDate] = useState('');

    useEffect(() => {
        const now = new Date().toLocaleString('en-US', { timeZone: timezone });
        setDate(new Date(now).toLocaleDateString());
    }, [timezone]);

    return <span>{date}</span>;
};

export default GetDate;