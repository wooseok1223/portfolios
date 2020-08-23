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

export default function GroupSizesColors() {
    const classes = useStyles();

    return (
        <div>
            <Button style={{color: '#000099'}}>
                <Link to="/portfolios/about" style={{textDecoration:"none", color: '#000099'}}>Home</Link>
            </Button>
            <Button style={{color: '#000099'}}>
                <Link to="/portfolios/skill" style={{textDecoration:"none", color: '#000099'}}>Skill</Link>
            </Button>
            <Button style={{color: '#000099'}}>
                <Link to="/portfolios/Project" style={{textDecoration:"none", color: '#000099'}}>Project</Link>
            </Button>
        </div>
    );
}