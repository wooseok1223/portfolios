import React from 'react'
import Container from '@material-ui/core/Container';
import Image from 'material-ui-image'
import Img from '../Img/main.png'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    rootArea: {
        opacity: 0.7
    }
}));


export default function AboutPage() {
    const classes = useStyles();

    return (
        <Container maxWidth="sm" className={classes.rootArea}>
            <Image
                src={Img}
                style={{backgroundColor: '#cfe8fc', height: '100vh'}}>
            </Image>
        </Container>
);
}


