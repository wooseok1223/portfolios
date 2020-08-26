import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import MainPage from '../src/page/MainPage'
import SkillPage from '../src/page/SkillPage'
import ProjectPage from '../src/page/ProjectPage'
import Header from '../src/contents/Header'
import Footer from '../src/contents/Footer'

const useStyles = makeStyles((theme) => ({
    headerArea: {
        width: "100%",
        height: "15%"
    },
    mainArea: {
        height: "70%"
    },
    bottomArea: {
        width: "100%",
        height: "15%"
    }
}));


export default function App() {
    const classes = useStyles();
    const [contentsValue, SetContentsValue] = React.useState(0);

    const contentsSubmit = (value) => {
        SetContentsValue(value);

        if (value === 0) {
            let location = document.querySelector("#about").offsetTop;
            window.scrollTo({top: location-80, behavior: 'smooth'});
        } else if (value === 1) {
            let location = document.querySelector("#skill").offsetTop;
            window.scrollTo({top: location-70 , behavior: 'smooth'});
        } else if (value === 2) {
            let location = document.querySelector("#project").offsetTop;
            window.scrollTo({top: location - 70, behavior: 'smooth'});
        }
    }

    return (
        <div>
            <Header
                contentsChangeValue={contentsSubmit}
                className={classes.headerArea}
            />
            <div className={classes.mainArea}>
                <MainPage/>
                <SkillPage/>
                <ProjectPage/>
            </div>
            <Footer/>
        </div>
    );
}

