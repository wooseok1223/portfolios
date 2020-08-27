import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import MoreGrid from '../function/Grid'

const useStyles = makeStyles((theme) => ({
    titleContent: {
        padding: theme.spacing(3, 0, 3)
    }
}));

const dataSet = [
    {
        title: "상",
        name: ['python','Django','Flask']
    },
    {
        title: "중",
        name: ['react','javascript']
    },
    {
        title: "하",
        name: ['C','C#']
    }
]


export default function Album() {
    const classes = useStyles();

    return (
        <div>
            <main>
                <div className={classes.titleContent}>
                    <Typography variant="h5" align="center" id="skill">
                        Skill
                    </Typography>
                    <div className={classes.titleContent}>
                        <MoreGrid
                            dataSet={dataSet}
                            mode={''}
                        />
                    </div>
                </div>
            </main>
        </div>
    );
}