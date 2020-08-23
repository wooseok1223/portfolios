import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import ProfileList from '../function/Card'
import MoreGrid from '../function/Grid'

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
    const [MoreView, setMoreMiew] = React.useState(false);

    const callbackFunction = (MoreView) => {
        setMoreMiew(MoreView);
    }

    const addComponent = (
        <div>
            <div className={classes.titleContent}>
                <Typography variant="h5" align="center">
                    career
                </Typography>
            </div>
            <div className={classes.titleContent}>
                <MoreGrid/>
            </div>
        </div>
    )

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
                            <ProfileList
                                moreViewFlag={MoreView}
                                callbackFunction={callbackFunction}
                            />
                        </div>
                    </Container>
                </div>
                <div>
                    {MoreView == true ? addComponent : ''}
                </div>
            </main>
            {/* End footer */}
        </React.Fragment>
    );
}