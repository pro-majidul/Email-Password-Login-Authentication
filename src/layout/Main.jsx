import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <section className ='min-h-[calc(90vh-232px)] w-11/12 mx-auto my-20 py-10' >
            <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default Main;