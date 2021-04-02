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
        name: ['Python','Django','Git','Postgresql','Mysql','AWS', 'Docker']
    },
    {
        title: "Soft Skill",
        name: ['Cplat','C', 'Node','MongoDB', 'React', 'JavaScript', ]
    },
    {
        title: "Progressing",
        name: ['GraphQL', 'Kubernetes', 'Msa', 'Elk']
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