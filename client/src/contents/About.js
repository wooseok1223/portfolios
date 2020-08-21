import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ProfileList from '../function/Card'

const useStyles = makeStyles((theme) => ({
    heroContent: {
        padding: theme.spacing(3, 0, 6),
        background: '#CCFFCC'
    },
    titleContent: {
        padding: theme.spacing(3, 0, 0),
        background: '#CCFFCC'
    },
    cardDesign: {
        height: ''
    }
}));

export default function Album() {
    const classes = useStyles();


    return (
        <React.Fragment>
            <CssBaseline/>
            <main>
                <div className={classes.titleContent}>
                    <Typography variant="h5" align="center">
                        ABOUT ME
                    </Typography>
                </div>
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">
                        <div className={classes.cardDesign}>
                            <ProfileList/>
                        </div>
                    </Container>
                </div>
            </main>
            {/* End footer */}
        </React.Fragment>
    );
}