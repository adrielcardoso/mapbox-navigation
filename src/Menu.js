import React from 'react';
import PropTypes from 'prop-types';
import {
  Dimensions,
  StyleSheet,
  AsyncStorage,
  View,
  Text,
  Alert,
} from 'react-native';
import { Avatar, ListItem, Icon } from 'react-native-elements'
import { SESSION_USER } from './util/scale';
import { StackActions, NavigationActions } from 'react-navigation';

const window = Dimensions.get('window');
const uri = 'https://pickaface.net/gallery/avatar/Opi51c74d0125fd4.png';

const list = [
  {
    name: 'Pagamentos',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
    slug: 'pagamento'
  },
  {
    name: 'Agendar',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    slug: 'agendar'
  },
  {
    name: 'Viagens',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    slug: 'viagens'
  },
  {
    name: 'Configurações',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    slug: 'config'
  },
  {
    name: 'Ajuda',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    slug: 'ajuda'
  },
  {
    name: 'Contato',
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    slug: 'contato'
  }
]

export default function Menu({ onItemSelected }) {

  action = (itemMenu, onItemSelected) => {
    if(itemMenu.slug == 'sair'){
      this.actionLogout(onItemSelected);
    }else{
      Alert.alert(
        'Ops',
        'Ainda não temos essa página',
        [
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
    }
  }

  actionLogout = (onItemSelected) => {
    Alert.alert(
      'Ei',
      'Deseja fazer logout ?',
      [
        {
          text: 'Cancelar',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'Sim', onPress: () => {
          AsyncStorage.removeItem(SESSION_USER).then(() => {
            const resetAction = StackActions.reset({
              index: 0,
              actions: [NavigationActions.navigate({ routeName: 'InitScreen' })],
            });
            onItemSelected.props.navigation.dispatch(resetAction);
          })
        }},
      ],
      {cancelable: false},
    );
  }

  return (
    <View style={{
      flex:1,
      backgroundColor: '#FDB621'
    }}>
        <View style={{
          width: window.width*0.63,
          height: window.height*0.8,
          backgroundColor: '#fff',
          marginLeft: window.width * 0.015,
          marginTop: window.height * 0.15,
          borderTopEndRadius: 10,
          borderTopStartRadius: 10,
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: {
              height: 0,
              width: 0
          },
          elevation: 1,
          borderBottomStartRadius: 10,
          borderBottomEndRadius: 10,
        }}>
            <View style={{
              marginTop: 40,
              borderRadius: 50,
              marginTop: 10,
              alignItems: 'center',
            }}>
                <Avatar
                  size="xlarge"
                  rounded
                  title="M"
                  onPress={() => console.log("Works!")}
                  source={{ uri }}
                  containerStyle={{
                    marginTop: -60,
                    width: 120,
                    height: 120,
                    borderRadius: 60,
                  }}
                  activeOpacity={0.7}
                />
                <Text style={{
                  paddingTop: 20,
                  fontWeight: '600'
                }}>Adriel Cardoso</Text>
            </View>
            <View style={{
              marginTop: 10,
            }}>
                {
                      list.map((l, i) => (
                        <ListItem
                          key={i}
                          onPress={() => this.action(l, onItemSelected)}
                          containerStyle={{
                            borderBottomWidth: 1,
                            borderColor: '#C8C8C8',  
                          }}
                          leftAvatar={<Icon
                            name='heartbeat'
                            type='font-awesome'
                            size={20}
                            containerStyle={{
                              marginLeft: 10
                            }}
                            color='#915511' />}
                          titleStyle={{
                            color: '#915511',
                            fontWeight: '500'
                          }}
                          title={l.name}
                        />
                      ))
                }
            </View>
            <View style={{
              backgroundColor: 'aqua',
              position: 'absolute',
              bottom:10,
              width:200,
              marginLeft: 10
            }}>
              {
                [{
                  name: 'Sair',
                  avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                  slug: 'sair'
                }].map((l, i) => (
                  <ListItem
                    key={i}
                    onPress={() => this.action(l, onItemSelected)}
                    leftAvatar={<Icon
                      name='heartbeat'
                      type='font-awesome'
                      size={20}
                      color='#915511'
                      />}
                    titleStyle={{
                      color: '#915511',
                      fontWeight: '500'
                    }}
                    title={l.name}
                  />
                ))
              }
            </View>
        </View>
        
    </View>
  );
}

Menu.propTypes = {
  onItemSelected: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  menu: {
    width: window.width*0.6,
    height: window.height,
    backgroundColor: 'aqua',
  },
  avatarContainer: {
    marginBottom: 20,
    marginTop: 20,
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    left: 70,
    top: 20,
  },
  item: {
    fontSize: 14,
    fontWeight: '300',
    paddingTop: 5,
  },
});