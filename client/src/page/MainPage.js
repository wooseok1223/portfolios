import React from 'react'
import Header from '../contents/Header'
import AboutPage from '../contents/About'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

function MainPage() {

    return (
        <div>
            <Header/>
            <AboutPage/>
            <Footer/>
        </div>
    );
}


export default MainPage;
