import React from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import MainPage from '../src/page/MainPage'
import SkillPage from '../src/page/SkillPage'
import ProjectPage from '../src/page/ProjectPage'
import Header from '../src/contents/Header'
import Footer from '../src/contents/Footer'

const Router = () => (
    <BrowserRouter>
        <Header/>
        <Switch>
            <Route exact path="/portfolios" component={MainPage}/>
            <Route path="/about" component={MainPage}/>
            <Route path='/skill' component={SkillPage}/>
            <Route path='/project' component={ProjectPage}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
);

export default Router;