import React from 'react';
import './Everycontent.css'
const EveryContent = ({content}) => {
    const {id, name,logo} = content;
    return (
        <div className='content'>
            <div>
            <img src={logo} alt="" />
            <h2>name {name}</h2>

            </div>
            
        </div>
    );
};

export default EveryContent;