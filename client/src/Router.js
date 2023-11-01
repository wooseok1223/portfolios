import React from 'react';
import {Route, Switch} from 'react-router-dom';
import MainPage from '../src/page/MainPage'
import SkillPage from '../src/page/SkillPage'
import AboutPage from '../src/page/AboutPage'
import ProjectPage from '../src/page/ProjectPage'

const Router = () => (
    <>
        <Switch>
            <Route exact path="/" component={MainPage}/>
            <Route path="/about" component={AboutPage}/>
            <Route path='/skill' component={SkillPage}/>
            <Route path='/project' component={ProjectPage}/>
        </Switch>
    </>
);

export default Router;