import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 200,
        width: "300px",
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function SpacingGrid({dataSet, mode}) {
    const classes = useStyles();

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={5}>
                    {mode == 'Carrer' ?
                        dataSet.map((value, i) => (
                            <Grid key={i} item>
                                <Paper className={classes.paper}>
                                    <Typography align="center" variant="h5" component="h2" style={{marginBottom: 12}}>
                                        {value.title}
                                    </Typography>
                                    <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                        {value.name}
                                    </Typography>
                                    <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                        {value.date}
                                    </Typography>
                                    <Typography style={{fontSize: "14px"}}>
                                        {value.contents}
                                    </Typography>
                                </Paper>
                            </Grid>
                        ))
                        : dataSet.map((value, i) => (
                            <Grid key={i} item>
                                <Paper className={classes.paper}>
                                    <Typography align="center" variant="h5" component="h2" style={{marginBottom: 12}}>
                                        {value.title}
                                    </Typography>
                                    {value.name.map((value2) => (
                                    <Typography style={{fontSize: "14px", marginBottom: 12}}>
                                        {value2}
                                    </Typography>
                                    ))}
                                </Paper>
                            </Grid>
                        ))
                    }
                </Grid>
            </Grid>
        </Grid>
    );
}