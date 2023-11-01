import React from 'react';
import Header from '../src/contents/Header'
import Footer from '../src/contents/Footer'
import Router from "../src/Router";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
    },
    header: {
        flex: '20%', // 헤더 영역 높이 20%
        backgroundColor: 'lightgray',
    },
    content: {
        flex: '70%', // 컨텐츠 영역 높이 70%
        backgroundColor: 'white',
    },
    footer: {
        flex: '10%', // 푸터 영역 높이 10%
        backgroundColor: 'lightgray',
    },
}));

export default function App() {
    const classes = useStyles();

    return (
        <div className={classes.container}>
            <Paper className={classes.header}>
                <Header/>
            </Paper>
            <Paper className={classes.content}>
                <Router />
            </Paper>
            <Paper className={classes.footer}>
                <Footer/>
            </Paper>
        </div>
    );
}

