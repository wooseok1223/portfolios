import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import {makeStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

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

export default function GroupSizesColors({contentsValueChange}) {
    const classes = useStyles();

    const contentsChange = (clickValue) => {
        contentsValueChange(clickValue)
    }

    return (
        <div>
            <Button
                style={{color:'#000099'}}
                onClick={() => {contentsChange(0)}}
            >
                About
            </Button>
            <Button
                style={{color:'#000099'}}
                onClick={() => {contentsChange(1)}}
            >
                Skill
            </Button>
            <Button
                style={{color:'#000099'}}
                onClick={() => {contentsChange(2)}}
            >
                Project
            </Button>
        </div>
    );
}