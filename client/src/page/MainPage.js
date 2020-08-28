import React from 'react'
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image'
import Img from '../Img/test.jpeg'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    rootArea: {
        width: window.outerWidth,
        height: window.outerHeight
    },
    mainImg: {
        position : "absolute",
        top : 0,
        left : 0,
        opacity: 0.8,
        height: "100%",
        width: "100%"

    }
}));


export default function AboutPage() {
    const classes = useStyles();

    return (
        <Container className={classes.rootArea}>
            <img
                src={Img}
                className={classes.mainImg}>
            </img>
        </Container>
    );
}


