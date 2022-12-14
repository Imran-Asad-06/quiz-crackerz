import React from 'react';
import { useLoaderData } from 'react-router-dom';
import EveryContent from '../EveryContent/EveryContent';
import './Content.css'


const Content = () => {
    const contents = useLoaderData().data;
    console.log(contents);
    
    return (
        <div className='content'>
            
            {
                contents.map(content=> <EveryContent 
                 key={content.id}
                 content={content}
                ></EveryContent>)


            }
            
        </div>
        
    );
};

export default Content;