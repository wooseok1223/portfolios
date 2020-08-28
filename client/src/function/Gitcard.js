import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Acitivity from '../Img/activity.png'
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 2
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 900,
    },
    image: {
        width: 300,
        height: 300,
    },
    img: {
        margin: 'auto',
        display: 'inline-block',
        maxWidth: "100%",
        maxHeight: "100%"
    },
    bottomContent: {
        height: "100px"
    }
}));

export default function Gitcard({dataSet}) {
    const classes = useStyles();

    const linkMove = (src) => {
        return window.open(src)
    }

    return (
        <div className={classes.root}>
            {dataSet.map((value, i) => (
                <div>
                    <Paper className={classes.paper}>
                        <Grid container spacing={2}>
                            <Grid item>
                                <ButtonBase className={classes.image} onClick={() => {linkMove(value.link)}}>
                                    <img className={classes.img} alt="complex" src={value.img}/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={2}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            {value.title}
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            {value.date}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary">
                                            {value.contents}
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Paper>
                    <div className={classes.bottomContent}/>
                </div>
            ))}
        </div>
    );
}