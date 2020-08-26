import React from 'react';
import './App.css';
import MainPage from '../src/page/MainPage'
import SkillPage from '../src/page/SkillPage'
import ProjectPage from '../src/page/ProjectPage'
import Header from '../src/contents/Header'
import Footer from '../src/contents/Footer'


export default function App() {
    const [contentsValue, SetContentsValue] = React.useState(0);

    const contentsSubmit = (value) => {
        SetContentsValue(value);
    }

    return (
        <React.Fragment>
            <Header
                contentsChangeValue={contentsSubmit}/>
            {contentsValue === 0 ? <MainPage/> : ''}
            {contentsValue === 1 ? <SkillPage/> : ''}
            {contentsValue === 2 ? <ProjectPage/> : ''}
            <Footer/>
        </React.Fragment>
    );
}

