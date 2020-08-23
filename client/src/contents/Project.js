import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';

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
            <div>
                hello
            </div>
        </React.Fragment>
    );
}