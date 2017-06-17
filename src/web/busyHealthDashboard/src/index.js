import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import * as firebase from 'firebase';
import 'bootstrap/dist/css/bootstrap.css'
import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';

global.jQuery =require('jquery');
require('bootstrap');
// import {NewsFeed} from "./components/pages/newsfeed";




 //declaring class here afterwards checkout google video

  // ReactDOM.render(<App />, document.getElementById('root'));
