import React from 'react';
//import T33_08 from '../src/tutorial/4-forms/T43_08_crown2_create';
import Grocery_08 from '../demo/grocery/Grocery_08';
import Navbar_08 from '../demo/navbar/Navbar_08';
import { links, social } from './nav_data'

const ClassDemoPage_08 = () => {
    return (
        <>
            <Navbar_08 links={links} social={[]} />

            <Grocery_08 />
        </>

        /*<div className='container'>
          <h2>Advanced Tutorial</h2>
          <T33_08 />
        </div>*/
    );
};

export default ClassDemoPage_08;
