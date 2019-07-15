import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    ImageBackground,
    KeyboardAvoidingView,
    Image,
    Dimensions,
    AsyncStorage,
} from 'react-native';
import { Button,Avatar } from 'react-native-elements';
import { scale, scaleVertical, SESSION_USER } from './util/scale';
import { StackActions, NavigationActions } from 'react-navigation';

const window = Dimensions.get('window');

export default class InitScreen extends React.Component
{

  constructor(props){
    super(props)
  }

  getBackGroundImageSource = () => (
    require('./assets/back.png')
  );

  componentWillMount(){
    AsyncStorage.getItem(SESSION_USER).then(data => {
      if(data){
        let user = JSON.parse(data);
        if(user){
          const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'PermissionScreen' })],
          });
          this.props.navigation.dispatch(resetAction);
        }
      }
    })
  }

  renderImage = () => <Image source={this.getLogoImageSource()} />;

  getLogoImageSource = () => (
    require('./assets/logo.png')
  );

  render = () => (  <ImageBackground  source={this.getBackGroundImageSource()} style={styles.container}>
                                  <View style={{
                                      width: window.width,
                                  }}>
                                    <View style={{
                                      justifyContent: 'center',
                                      flexDirection: 'row',
                                      paddingTop: scaleVertical(90)
                                    }}>
                                        <View style={{
                                          flexDirection: 'column',
                                          alignItems: 'center'
                                        }}>
                                          {this.renderImage()}
                                          <Image style={styles.image} source={require('./assets/taxi.png')} />
                                        </View>
                                    </View>
                                    <View style={{
                                      paddingTop: scaleVertical(95)
                                    }}>
                                        <View style={{
                                          margin: scaleVertical(20)
                                        }}>
                                            <Button
                                              title="ACESSAR"
                                              buttonStyle={{
                                                backgroundColor: '#FEA621',
                                                height: scaleVertical(45),
                                                borderColor: '#FEA621',
                                                borderWidth: 3,
                                                borderRadius:5
                                              }}
                                              onPress={() => this.props.navigation.navigate('LoginScreen')}
                                              titleStyle={{
                                                color: "#000",
                                              }}
                                            />
                                        </View>
                                        <View style={{
                                          margin: scaleVertical(20)
                                        }}>
                                            <Button
                                              title="CADASTRE-SE"
                                              buttonStyle={{
                                                backgroundColor: null,
                                                borderColor: '#FEA621',
                                                height: scaleVertical(45),
                                                borderWidth: 3,
                                                borderRadius:5,
                                              }}
                                              onPress={() => this.props.navigation.navigate('CreateScreen')}
                                              titleStyle={{
                                                color: "#FEA621",
                                              }}
                                            />
                                        </View>
                                    </View>
                                </View>
                                <View style={{
                                  paddingTop: scaleVertical(20),
                                  position: 'absolute',
                                  bottom:Dimensions.get('window').height*0.04,
                                  width: Dimensions.get('window').width,
                                }}>
                                    <View style={{
                                      justifyContent: 'center',
                                      flexDirection: 'row',
                                    }}>
                                        <View style={{
                                          flexDirection: 'column',
                                          alignItems: 'center'
                                        }}>
                                            <Image
                                              style={{
                                                width: scaleVertical(40),
                                                height: scaleVertical(40)
                                              }}
                                              source={require('./assets/brasao.png')}
                                            />
                                            <Image
                                              style={{marginTop:10}}
                                              source={require('./assets/setec.png')}
                                            />
                                        </View>
                                    </View>
                                </View>
                    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  }
});