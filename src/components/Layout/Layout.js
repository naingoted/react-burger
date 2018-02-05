import React, {Component} from 'react';
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
                <Toolbar drawerToggleClicked={this.SideDrawerToggleHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed={this.SideDrawerClosedHandler}  />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
    
}
export default Layout;