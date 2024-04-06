import React from 'react';
import { Outlet } from 'react-router-dom';
import BookingNav from './BookingNav';

const BookingTabs = () => {
    return (
        <div>
            <BookingNav/>
            <Outlet/>
        </div>
    );
};

export default BookingTabs;