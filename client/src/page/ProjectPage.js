import React from 'react'
import Header from '../contents/Header'
import Project from '../contents/Project'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

function SkillPage() {

    return (
        <div style = {{display : "inline-block", background : "#CDDAE4", width:"1200px",textAlign: "center"}}>
            <Project/>
        </div>
    );
}


export default SkillPage;
