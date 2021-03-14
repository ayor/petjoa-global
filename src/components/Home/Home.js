import React from 'react';
import About from '../About/AboutUsPage';
import Mission from '../Mission/Mission';
import BackToTop from '../BackToTop/BackToTop';
import Header from '../Header/Header';

const Home = (props) => (
        <React.Fragment >
            <Header {...props} />
            <About />
            <Mission />
            <BackToTop destination="#home"/>
        </React.Fragment >);

export default Home;