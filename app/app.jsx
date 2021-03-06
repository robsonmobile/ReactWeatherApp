var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

var css = require('./style.scss');
var foundation = require('../node_modules/foundation-sites/dist/css/foundation.min.css');
//import url from './style.css';
//require('style!css!foundation-sites/dist/foundation.min.css')
 
ReactDOM.render(
    <Router history ={hashHistory}>
       <Route path ='/' component={Main}>
           <Route path='about' component={About}/>
           <Route path='examples' component={Examples}/>
           <IndexRoute component = {Weather}/>
       </Route> 
    </Router>,
          document.getElementById('app')
      ); 
