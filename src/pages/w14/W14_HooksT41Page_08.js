import React from 'react';
//import T33_08 from '../src/tutorial/4-forms/T43_08_crown2_create';
import Navbar_08 from '../../demo/navbar/Navbar_08';
import { links, social } from './nav_data'
import T41_08 from '../../tutorial/4-forms/T41_08_controlled-inputs'

const W14_HooksT41Page_08 = () => {
    return (
        <>
            <Navbar_08 links={links} social={[]} />

            <T41_08 />
        </>

        /*<div className='container'>
          <h2>Advanced Tutorial</h2>
          <T33_08 />
        </div>*/
    );
};

export default W14_HooksT41Page_08;
