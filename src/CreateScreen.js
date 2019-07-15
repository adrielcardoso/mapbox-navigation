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
} from 'react-native';
import { Button,Avatar } from 'react-native-elements';
import { scale, scaleVertical, SESSION_USER } from './util/scale';
import Hr from 'react-native-hr-component'
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native-gesture-handler';
import { StackActions, NavigationActions } from 'react-navigation';

const window = Dimensions.get('window');

export default class CreateScreen extends React.Component
{
  state = {
    nome: null,
    cpf: null,
    phone: null,
    email: null, 
    senha: null,
    csenha: null,
  }

  constructor(props){
    super(props)
  }

  renderImage = () => <Image source={this.getLogoImageSource()} />;

  getLogoImageSource = () => (
    require('./assets/verysmall.png')
  );

  actionCreate = () => {
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
        <ScrollView>
            <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
                    <View style={{
                        width: window.width,
                    }}>
                      <View style={{
                        justifyContent: 'center',
                        flexDirection: 'row',
                        paddingTop: scale(55),
                        paddingBottom:scale(50),
                      }}>
                          <Image source={this.getLogoImageSource()} />
                      </View>
                      <View style={{
                        flexDirection: 'column',
                        width: '90%',
                        marginLeft:'5%',
                      }}>
                            <Hr text="CADASTRE-SE" fontSize={5} lineColor="#eee" textPadding={5} 
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
                            paddingTop:scaleVertical(30),
                            height: window.height
                          }}>
                                <TextInput
                                  autoCapitalize = 'none'
                                  style={styles.input}
                                  placeholder={'Nome'}
                                  keyboardType={'default'}
                                  value={this.state.nome}
                                  onChangeText={(nome) => this.setState({nome:nome})}
                                />
                                <TextInput
                                  autoCapitalize = 'none'
                                  style={[styles.input, {
                                    marginTop: scale(15)
                                  }]}
                                  secureTextEntry={true}
                                  placeholder={'CPF'}
                                  keyboardType={'numeric'}
                                  value={this.state.cpf}
                                  onChangeText={(cpf) => this.setState({cpf:cpf})}
                                />
                                <TextInput
                                  autoCapitalize = 'none'
                                  style={[styles.input, {
                                    marginTop: scale(15)
                                  }]}
                                  secureTextEntry={true}
                                  placeholder={'Fone'}
                                  keyboardType={'numeric'}
                                  value={this.state.phone}
                                  onChangeText={(phone) => this.setState({phone:phone})}
                                />
                                <TextInput
                                  autoCapitalize = 'none'
                                  style={[styles.input, {
                                    marginTop: scale(15)
                                  }]}
                                  secureTextEntry={true}
                                  placeholder={'E-mail'}
                                  keyboardType={'email-address'}
                                  value={this.state.email}
                                  onChangeText={(email) => this.setState({email:email})}
                                />
                                <TextInput
                                  autoCapitalize = 'none'
                                  style={[styles.input, {
                                    marginTop: scale(15)
                                  }]}
                                  secureTextEntry={true}
                                  placeholder={'Senha'}
                                  keyboardType={'default'}
                                  value={this.state.senha}
                                  onChangeText={(senha) => this.setState({senha:senha})}
                                />
                                <TextInput
                                  autoCapitalize = 'none'
                                  style={[styles.input, {
                                    marginTop: scale(15)
                                  }]}
                                  secureTextEntry={true}
                                  placeholder={'Confirme a Senha'}
                                  keyboardType={'default'}
                                  value={this.state.csenha}
                                  onChangeText={(csenha) => this.setState({csenha:csenha})}
                                />
                                <Button
                                  containerStyle={{
                                    paddingTop:scale(30),
                                  }}
                                  title="ACESSAR"
                                  buttonStyle={styles.button}
                                  onPress={() => this.actionCreate()}
                                  titleStyle={{
                                    color: '#FDB621',
                                    fontWeight: 500
                                  }}
                                />
                          </View>
                      </View>
                </KeyboardAvoidingView>
        </ScrollView>
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
    marginTop: Dimensions.get('window').width*0.005,
  },
});