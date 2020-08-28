import React from 'react'
import Header from '../contents/Header'
import Project from '../contents/Project'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContents: {
        display: "inline-block",
        background: "#CDDAE4",
        width: "80%",
        textAlign: "center"
    }
}));

function SkillPage() {
    const classes = useStyles();

    return (
        <div className={classes.mainContents}>
            <Project/>
        </div>
    );
}


export default SkillPage;
