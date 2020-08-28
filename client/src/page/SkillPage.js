import React from 'react'
import Header from '../contents/Header'
import Skill from '../contents/Skill'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    mainContents: {
        display: "inline-block",
        background: "#F2F2E4",
        width: "80%",
        textAlign: "left"
    }
}));

function SkillPage() {
    const classes = useStyles();

    return (
        <div className={classes.mainContents}>
            <Skill/>
        </div>
    );
}


export default SkillPage;
