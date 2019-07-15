import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
    ImageBackground,
    KeyboardAvoidingView,
    Alert,
    Dimensions,
    AsyncStorage,
} from 'react-native';
import { scale, scaleVertical, SESSION_USER } from './util/scale';
// import TouchableScale from 'react-native-touchable-scale';  
// import LinearGradient from 'react-native-linear-gradient';  
import { ListItem, Header, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { StackActions, NavigationActions } from 'react-navigation';
import Permissions from 'react-native-permissions'
// import { ScrollView } from 'react-native-gesture-handler';

export default class PermissionScreen extends React.Component
{
  state = {
    permissions: [],
    disabled: false,
  }

  constructor(props){
    super(props)
  }

  componentWillMount(){
    this.setState({
      permissions:  [
        {
          nome: 'Location',
          descricao: 'Precisamos desse acesso para mapear suas corridas com maior precisão do GPS.',
          check : true,
          type: 'location'
        },
        {
          nome: 'Push Notification',
          descricao: 'Precisamos desse acesso para que você receba notificações importantes de suas corridas.',
          check : true,
          type: 'notification'
        },
        {
          nome: 'Storage',
          descricao: 'Precisamos desse acesso para liberar a função de Fotos do seu perfil.',
          check : true,
          type: 'storage'
        },
        {
          nome: 'Camera',
          descricao: 'Precisamos desse acesso para liberar a função bater foto.',
          check : true,
          type: 'camera'
        },
        {
          nome: 'Photos',
          descricao: 'Precisamos desse acesso para liberar a busca de fotos da sua galeria.',
          check : true,
          type: 'photo'
        },  
      ] 
    })
  }

  parsePermission(item, statusParse){
      let temp = [];
      for(let singles of this.state.permissions){
        if(singles.nome == item.nome){
          single.check = statusParse;
        }
        temp.push(singles);
      }
      let status = false;
      for(let single of temp){
        if(!single.check){
          status = true;
        }
      }
      this.setState({
        permissions: temp, disabled: status
      })
  }

  render = () => (  
        <View style={{
          flex:1
        }}>
        <Header
          backgroundColor={'#FD9321'}
          centerComponent={{ text: 'PERMISSÕES', style: { color: '#fff' } }}
        />
        {/* <ScrollView contentContainerStyle={{
          paddingBottom:50
        }}>
            <View>
                <Text style={{
                  fontSize:15,
                  textAlign: 'center',
                  color: '#cdcdcd',
                  padding:20,
                  marginTop:25
                }}>
                      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </Text>
            </View>
            <View style={{
                        padding:20,
                    }}>
                {
                  this.state.permissions.map(single => {
                    return <ListItem
                                containerStyle={{
                                  borderRadius:5,
                                  marginTop:20
                                }}
                                onPress={() => {
                                  Permissions.check(single.type).then(response => {
                                      if(response == 'authorized'){
                                        this.parsePermission(single, true);
                                      }else{
                                        Permissions.request(single.type).then(response => {
                                          if(response == 'denied'){
                                            Alert.alert(
                                              'Ei!',
                                              Permissions.canOpenSettings()
                                              ? 'Você negou essa permissão anteriormente, para habilitar você será redirecionado para as Configurações.'
                                              : 'Você negou essa permissão anteriormente, para habilitar vá até as configurações do aplicativo.',
                                              [
                                                {
                                                  text: 'Cancelar',
                                                  onPress: () => console.log('Cancel Pressed'),
                                                  style: 'cancel',
                                                },
                                                {text: 'OK', onPress: () => Permissions.openSettings()},
                                              ],
                                              {cancelable: false},
                                            );
                                          }else{
                                            this.parsePermission(single, response == 'authorized');
                                          }
                                        })
                                      }
                                  })
                                }}
                                Component={TouchableScale}
                                friction={90}  
                                tension={100}  
                                activeScale={0.95}  
                                linearGradientProps={{
                                  colors: ['#FDB621', '#FD9321'],
                                  start: [1, 0],
                                  end: [0.2, 0],
                                }}
                                ViewComponent={LinearGradient} 
                                leftAvatar={
                                  single.check  
                                        ? <Icon
                                        size={30}
                                        name={'check'}
                                        color='green'
                                        onPress={() => {
                                          this.props.mContext.setState({
                                            isOpen: !this.props.mContext.state.isOpen
                                          })
                                        }} />

                                        :<Icon
                                        size={30}
                                        name={'close'}
                                        color='#fff'
                                        onPress={() => {
                                          this.props.mContext.setState({
                                            isOpen: !this.props.mContext.state.isOpen
                                          })
                                        }} />
                                }
                                title={single.nome}
                                titleStyle={{ color: 'white', fontWeight: 'bold' }}
                                subtitleStyle={{ color: 'white' }}
                                subtitle={single.descricao}
                              />
                  })
                }
            </View>
            <View style={{
              alignItems: 'center',
              alignContent: 'center',
              width: Dimensions.get('window').width
            }}>
                    <Button
                        title="CONCLUIR"
                        buttonStyle={{
                          borderTopLeftRadius:7,
                          borderTopRightRadius:7,
                          borderBottomRightRadius:7,
                          borderBottomLeftRadius:7,
                          width: Dimensions.get('window').width*0.90,
                          backgroundColor: '#000',
                          height: 60,
                          paddingLeft:Dimensions.get('window').width*0.03,
                          marginTop: Dimensions.get('window').width*0.02,
                        }}
                        onPress={() => {
                          const resetAction = StackActions.reset({
                            index: 0,
                            actions: [NavigationActions.navigate({ routeName: 'HomeScreen' })],
                          });
                          this.props.navigation.dispatch(resetAction);
                        }}
                        disabled={this.state.disabled}
                      />
            </View>
        </ScrollView> */}
      </View>
  )
}