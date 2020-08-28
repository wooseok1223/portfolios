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
    },
    textArea : {
        position : "absolute",
        zIndex: 1,
        top:"50%",
        left:"50%",
        transform: "translate(-50%, -50%)",
        fontSize:"3rem",
        color: "white",
        zIndex: 2,
        textAlign: "center"
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
            <div className={classes.textArea}>
                <span> 안녕하세요 Develper 서우석입니다.</span>
            </div>
        </Container>
    );
}


