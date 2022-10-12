import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Content from '../Content/Content';
import './Home.css';

const Home = () => {
    // const contents = useLoaderData().data;
    const contents2 = useLoaderData.apply()
    return (
        <div>
            <div className='home'>
               
            </div>
            <div>
               <Content></Content>
            </div>
        </div>
    );
};

export default Home;