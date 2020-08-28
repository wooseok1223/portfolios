import React from 'react'
import Header from '../contents/Header'
import About from '../contents/About'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContents : {
        display: "inline-block",
        background : "#FEFEEF",
        width:"80%",
        textAlign: "left"
    }
}));

function AboutPage() {
    const classes = useStyles();

    return (
        <div className={classes.mainContents}>
            <About/>
        </div>
    );
}


export default AboutPage;
