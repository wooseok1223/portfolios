import React from 'react'
import Header from '../contents/Header'
import Skill from '../contents/Skill'
import Footer from '../contents/Footer'
import {makeStyles} from '@material-ui/core/styles';

function SkillPage() {
    return (
        <div style = {{display : "inline-block", background : "#F2F2E4", width:"1200px", height: "800px" ,textAlign: "left"}}>
            <Skill/>
        </div>
    );
}


export default SkillPage;
