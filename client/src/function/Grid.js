import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 200,
        width: "300px",
    },
    skillPaper: {
        height: 500,
        width: 200
    },
    control: {
        padding: theme.spacing(2),
    },
    skillDiv: {
        display: "table",
        height: "auto",
        width: "80%",
        paddingBotton: "20px"
    },
    skillFont: {
        fontSize: "15px",
        marginLeft: "20px",
        display: "table-cell",
        verticalAlign: 'middle',
        paddingLeft: "10px"
    },
    skillImg: {
        verticalAlign: "middle",
        display: "table-cell"
    }
}));

export default function SpacingGrid({dataSet, mode}) {
    const classes = useStyles();
    console.log(dataSet)
    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Grid container justify="center" spacing={mode == 'Carrer' ? 5 : 10}>
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
                                <Paper className={classes.skillPaper}>
                                    <div>
                                        <Typography align="center" variant="h5" component="h2"
                                                    style={{marginBottom: 12}}>
                                            {value.title}
                                        </Typography>
                                    </div>
                                    {value.name.map((value2) => (
                                        <div className={classes.skillDiv}>
                                            <Avatar alt="Remy Sharp" src={require(`../Img/${value2}_img.png`)}
                                                    className={classes.skillImg}/>
                                            <Typography variant="h6" className={classes.skillFont}>
                                                {value2.includes('plat') ? value2.replace('plat', '#') : value2}
                                            </Typography>
                                        </div>
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