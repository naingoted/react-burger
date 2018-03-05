import React, {Component} from 'react';
import {connect} from 'react-redux';
import Aux from '../../hoc/Aux';
import classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';
class Layout extends Component {

    state = {
        showSideDrawer: false
    }
    SideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }
    SideDrawerToggleHandler = () => {
        // this.setState({showSideDrawer: !this.state.showSideDrawer}); - async will create random outcome
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer};
        
      });
    }
    render() {
        return(
            <Aux>
                <Toolbar 
                drawerToggleClicked={this.SideDrawerToggleHandler}
                isAuth ={this.props.isAuthed}
                />
                <SideDrawer 
                open={this.state.showSideDrawer} 
                closed={this.SideDrawerClosedHandler}
                isAuth= {this.props.isAuthed} 
                />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}
const mapStateToProps = state => {
    return {
    isAuthed: state.auth.token!==null
    }
}
export default connect(mapStateToProps)(Layout);