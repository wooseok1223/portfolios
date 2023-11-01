import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App'
import {BrowserRouter as Router} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <App/>
    </Router>,
    document.getElementById('root')
);

// ReactDOM.render(
//   <Router history={browserHistory}>
//     <Route path ="/" component={App}>
//         <IndexRoute component={Home}/>
//         <Route path="first" component={First}/>
//     </Route>
//   </Router>,
//   document.getElementById('root')
// );

