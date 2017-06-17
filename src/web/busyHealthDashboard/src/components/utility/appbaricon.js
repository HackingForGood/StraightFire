import React from 'react';
import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Subheader from 'material-ui/Subheader';
import {lime500, grey800,lightBlue300} from 'material-ui/styles/colors';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from 'react-router';
import FlatButton from 'material-ui/FlatButton';


class AppBarIcon extends React.Component {


  styles = (() =>{
    return {
      appBar:{
        position: 'fixed',
        titleFontWeight:100,
        // font-family: 'Raleway'

      }
    }
  })()

  constructor(props){
    super(props)
    this.state = {open:false}
  }

  handleToggle = () => this.setState({open: !this.state.open});

  render(){
    return(
      <div style={{fontWeight :'100'}}>
        <AppBar
        title ="Busy Nurse"
        style ={this.styles.appBar}
        onLeftIconButtonTouchTap = {this.handleToggle}
        iconElementRight={<FlatButton label="Sign Out" />}

        zDepth={0}
        />
        <RaisedButton
          label="Open Drawer"
          onTouchTap={this.handleToggle}
        />
        <Drawer open={this.state.open}>

          <Subheader style ={

            {paddingTop:16,background:lightBlue300}}
            onTouchTap={this.handleToggle}>BusyNurse

          </Subheader>
          <Link to = "/newsfeed">
          <MenuItem onTouchTap={this.handleToggle}>News Feed Posts</MenuItem>
          </Link>
          <Link to = {"/userdata"}>
          <MenuItem onTouchTap={this.handleToggle}>App User Data </MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Pending Pick Ups</MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Payment </MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Council Processing</MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Pending Delivery</MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Confirmed Delivery</MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Reports Delivery</MenuItem>
          </Link>
          <Link to = {"/"}>
          <MenuItem onTouchTap={this.handleToggle}>Admin Users</MenuItem>
          </Link>
         </Drawer>
      </div>
    )
  }
}

export default AppBarIcon
