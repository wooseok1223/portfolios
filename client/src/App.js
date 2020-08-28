import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AboutPage from '../src/page/AboutPage'
import SkillPage from '../src/page/SkillPage'
import ProjectPage from '../src/page/ProjectPage'
import Header from '../src/contents/Header'
import Footer from '../src/contents/Footer'
import MainPage from '../src/page/MainPage'


const useStyles = makeStyles((theme) => ({

}));


export default function App() {
    const classes = useStyles();
    const [contentsValue, SetContentsValue] = React.useState(0);

    const contentsSubmit = (value) => {
        SetContentsValue(value);

        if (value === 0) {
            let location = document.querySelector("#about").offsetTop;
            window.scrollTo({top: location - 80, behavior: 'smooth'});
        } else if (value === 1) {
            let location = document.querySelector("#skill").offsetTop;
            window.scrollTo({top: location - 70, behavior: 'smooth'});
        } else if (value === 2) {
            let location = document.querySelector("#project").offsetTop;
            window.scrollTo({top: location - 70, behavior: 'smooth'});
        }
    }

    return (
        <div>
            <Header
                contentsChangeValue={contentsSubmit}
            />
            <div style={{width:"100%",textAlign: "center"}}>
                <MainPage/>
                <AboutPage/>
                <SkillPage/>
                <ProjectPage/>
            </div>
            <Footer/>
        </div>
    );
}

