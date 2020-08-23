import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    titleContent: {
        padding: theme.spacing(3, 0, 3),
        background: '#CCFFCC'
    }
}));


export default function Album() {
    const classes = useStyles();

    return (
        <main>
            <div className={classes.titleContent}>
                <Typography variant="h5" align="center">
                    Project
                </Typography>
            </div>
        </main>
    );
}