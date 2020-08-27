import React from 'react'
import Header from '../contents/Header'
import About from '../contents/About'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

function AboutPage() {

    return (
        <div style = {{display : "inline-block", background : "#FEFEEF", width:"1000px" ,textAlign: "left"}}>
            <About/>
        </div>
    );
}


export default AboutPage;
