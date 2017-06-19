import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import AppBarIcon from './components/utility/appbaricon';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import ThreadDisplay from './ThreadDisplay/component/ThreadDisplay';
import NewsFeed from './components/pages/newsfeed';
import UserData from './UserData/component/userdata';
import './App.css';
import './index.css';

import { IndexRoute, Router, Route, hashHistory } from 'react-router';
import * as firebase from 'firebase';

injectTapEventPlugin();
var {ref} ="";
class App extends Component {

  constructor(props){

      super(props);
      this.state ={
        databaseRef:'',
      }

      var config = {
        

      };
      this.app = firebase.initializeApp(config);
      this.database = this.app.database();
      ref = this.database
    }
    componentDidMount(){
        this.setState({
          databaseRef :this.database
        })
    }
  render() {
    return (


      <MuiThemeProvider>
      <div className ="body">
        <div style = {{fontWeight:'100'}}>
          <AppBarIcon/>
          {this.props.children}
        </div>
      </div>
      </MuiThemeProvider>

    );
  }

}
class NewsFeedPageOne extends React.Component{

  render(){
    return(
      <div>
        <ThreadDisplay database ={ref}/>

      </div>
    )
  }
}
ReactDOM.render(
   <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component ={NewsFeedPageOne}></IndexRoute>
        <Route path ="/newsfeed" component={NewsFeedPageOne}></Route>
        <Route path = "/userdata" component={UserData}></Route>
       </Route>
   </Router>,
   document.getElementById('root')
);

export default App;
