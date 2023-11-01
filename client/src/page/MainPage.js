import React from 'react'
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image'
import Img from '../Img/test.jpeg'
import Typical from "react-typical";
import {makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Typing from 'react-typing-animation'

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
        color: "BlACK",
        textAlign: "center"
    },
    textAreaBottom : {
        position : "absolute",
        zIndex: 1,
        top:"70%",
        left:"50%",
        transform: "translate(-50%, 50%)",
        fontSize:"3rem",
        color: "BLUE",
        textAlign: "center"
    },
    typing: {
        display: 'inline-block',
    },
}));


export default function AboutPage() {
    const classes = useStyles();

    return (
        <Container className={classes.rootArea}>
            {/*<img*/}
            {/*    src={Img}*/}
            {/*    className={classes.mainImg}>*/}
            {/*</img>*/}
            <div className={classes.textArea}>
            <Typing speed={50} className={classes.typing}>
                <Typography variant="h3" gutterBottom>
                    Hello! My name is wooseok
                </Typography>
                <Typography variant="h4" gutterBottom>
                    I'm a data-engineer
                </Typography>
            </Typing>
            </div>
            <div className={classes.textAreaBottom}>
                <Typography variant="h5" gutterBottom >
                    <Typical
                        steps={[
                            "BACKEND",
                            1000,
                            "DATA ENGINEER",
                            1000,
                            "DEVELOPER"
                        ]}
                    />
                </Typography>
            </div>
        </Container>
    );
}


