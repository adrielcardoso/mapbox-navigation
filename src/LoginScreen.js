import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    AsyncStorage,
    KeyboardAvoidingView,
    Image,
    Dimensions,
    StatusBar,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import { Button,Avatar } from 'react-native-elements';
import { scale, scaleVertical, SESSION_USER } from './util/scale';
import Hr from 'react-native-hr-component'
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';

const window = Dimensions.get('window');

export default class LoginScreen extends React.Component
{
  state = {
    email: null, 
    senha: null,
  }

  constructor(props){
    super(props)
  }

  renderImage = () => <Image style={{
    width:50,height:50
  }} source={this.getLogoImageSource()} />;

  getLogoImageSource = () => (
    require('./assets/smalllogo.png')
  );

  actionLogin = () => {
    AsyncStorage.setItem(SESSION_USER, JSON.stringify(this.state)).then(() => {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'PermissionScreen' })],
      });
      this.props.navigation.dispatch(resetAction);
    })
  }

  render = () => (
    <View style={{ flex:1, backgroundColor: '#FDB621' }}>
        <StatusBar barStyle="light-content" />
        <View style={{
          position: 'absolute',
          zIndex: 9,
          padding: 22,
          paddingTop:50
        }}>
            <Icon
              size={30}
              name={'chevron-left'}
              color='#000'
              onPress={() => this.props.navigation.goBack()} />
        </View>
        <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
                <View style={{
                    width: window.width,
                }}>
                  <View style={{
                    justifyContent: 'center',
                    flexDirection: 'row',
                    paddingTop: scale(80),
                    paddingBottom:scale(50),
                  }}>
                      <Image source={this.getLogoImageSource()} />
                  </View>
                  <View style={{
                    flexDirection: 'column',
                    width: '90%',
                    marginLeft:'5%',
                  }}>
                        <Hr text="ACESSAR" fontSize={5} lineColor="#eee" textPadding={5} 
                                                              textStyles={{
                                                                color: '#000',
                                                                fontSize:18,
                                                                fontWeight:600
                                                              }} 
                                                              thickness={2}
                                                              lineColor={'#000'} />
                  </View>
                  <View style={{
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'center',
                    paddingTop:scale(30),
                  }}>
                        <TextInput
                          autoCapitalize = 'none'
                          style={styles.input}
                          placeholder={'CPF'}
                          keyboardType={'numeric'}
                          value={this.state.email}
                          onChangeText={(email) => this.setState({email:email})}
                        />
                        <TextInput
                          autoCapitalize = 'none'
                          style={[styles.input, {
                            marginTop: scale(20)
                          }]}
                          secureTextEntry={true}
                          placeholder={'Senha'}
                          keyboardType={'default'}
                          value={this.state.senha}
                          onChangeText={(senha) => this.setState({senha:senha})}
                        />
                        <Button
                          containerStyle={{
                            paddingTop:scale(30),
                          }}
                          title="ACESSAR"
                          buttonStyle={styles.button}
                          onPress={() => this.actionLogin()}
                          titleStyle={{
                            color: '#FDB621',
                            fontWeight: 500
                          }}
                        />
                        <TouchableOpacity 
                            onPress={() => alert('Ainda não podemos recuperar a sua senha')}>
                            <Text style={{
                              textDecorationLine:'underline', 
                              marginTop: scale(30)}}>
                              ESQUECI MINHA SENHA
                            </Text>
                        </TouchableOpacity>
                  </View>
              </View>
        </KeyboardAvoidingView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
  },
  button: {
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    borderBottomRightRadius:7,
    borderBottomLeftRadius:7,
    width: Dimensions.get('window').width*0.90,
    backgroundColor: '#000',
    height: 60,
    paddingLeft:Dimensions.get('window').width*0.03,
    marginTop: Dimensions.get('window').width*0.02,
  },
  input:{
    color: '#000',
    borderTopWidth: 1,
    borderBottomWidth:1,
    borderColor: '#fff',
    borderRightWidth:1,
    borderLeftWidth:1,
    borderTopLeftRadius:7,
    borderTopRightRadius:7,
    borderBottomRightRadius:7,
    borderBottomLeftRadius:7,
    width: Dimensions.get('window').width*0.90,
    backgroundColor: '#ffff',
    height: 50,
    paddingLeft:Dimensions.get('window').width*0.03,
    marginTop: Dimensions.get('window').width*0.02,
  },
});