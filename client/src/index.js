import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/App'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
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

