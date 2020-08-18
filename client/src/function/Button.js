import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

export default function GroupSizesColors() {
    const classes = useStyles();

    return (
        <div>
            <Button color="inherit">About</Button>
            <Button color="inherit">Skill</Button>
            <Button color="inherit">Project</Button>
            <Button color="inherit">Contact</Button>
        </div>
    );
}