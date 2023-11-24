import React from 'react';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import MoreGrid from '../function/Grid'

const useStyles = makeStyles((theme) => ({
    titleContent: {
        padding: theme.spacing(5, 0, 5)
    }
}));

const dataSet = [
    {
        title: "Hard Skill",
        name: ['Python', 'AWS', 'Docker', 'airflow']
    },
    {
        title: "Soft Skill",
        name: ['Node', 'React', 'JavaScript', 'Kubernetes', 'Elk', 'java']
    },
    {
        title: "Progressing",
        name: ['Msa', 'kafka', 'hive', 'presto', 'Flink']
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