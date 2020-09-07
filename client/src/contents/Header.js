import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Button from '../function/Button'
import Image1 from '../Img/profile.JPG'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        position: "fixed",
        opacity: 0.8,
        zIndex: 1
    },
    title: {
        flexGrow: 1,
        marginLeft: "15px",
        color: '#000000'
    }
}));

export default function ButtonAppBar(props) {
    const classes = useStyles();

    const contentsValueChange = (value) => {
        props.contentsChangeValue(value);
    }

    return (
        <div className={classes.root} id="header">
            <AppBar style={{background: '#FFFFFF'}}>
                <Toolbar>
                    <Avatar alt="Remy Sharp" src={Image1} id="header" onClick={() => {props.contentsChangeValue(0)}}/>
                    <Typography variant="h6" className={classes.title} id="header" onClick={() => {props.contentsChangeValue(0)}}>
                        WooSeok's PortFolios
                    </Typography>
                    <Button
                        contentsValueChange={contentsValueChange}
                    />
                </Toolbar>
            </AppBar>
        </div>
    );
}