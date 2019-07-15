import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    AsyncStorage,
} from 'react-native';
import MapScreen from './MapScreen';
import SideMenu from 'react-native-side-menu';
import Menu from './Menu'
import { StackActions, NavigationActions } from 'react-navigation';
import { SESSION_USER } from './util/scale';

export default class HomeScreen extends React.Component
{
  state = {
    isOpen : false
  }

  componentWillMount(){
    // AsyncStorage.getItem(SESSION_USER).then(data => {
    //   if(data){
    //     let user = JSON.parse(data);
    //     if(user){
    //       const resetAction = StackActions.reset({
    //         index: 0,
    //         actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
    //       });
    //       this.props.navigation.dispatch(resetAction);
    //     }
    //   }
    // })
  }

  onMenuItemSelected = item =>
    this.setState({
      isOpen: false,
      selectedItem: item,
  });

  updateMenuState(isOpen) {
    this.setState({ isOpen });
  }

  render () {
    const menu = <Menu onItemSelected={this} />
    return (
      <SideMenu
        menu={menu}
        isOpen={this.state.isOpen}
        onChange={isOpen => this.updateMenuState(isOpen)}
      >
          <MapScreen mContext={this} menu={Menu}/>
      </SideMenu>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});