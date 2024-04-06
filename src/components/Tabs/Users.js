import React from 'react';
import { Outlet } from 'react-router-dom';
import TabNav from './TabNav';

const Public = () => {
    return (
        <div>
           <TabNav/>
           <Outlet/> 
        </div>
    );
};

export default Public;