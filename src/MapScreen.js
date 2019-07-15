import React from 'react';
import { 
    StyleSheet, 
    Text,
    View,
} from 'react-native';
import { Header, Button, Avatar } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import MapboxGL from '@react-native-mapbox-gl/maps';
MapboxGL.setAccessToken('pk.eyJ1IjoiY3RpbWEiLCJhIjoiY2p2d2c4NGp6MDBiZDN6cnBobnY2b3NnbSJ9.jHlD89ed472LQ4jnxR1W0g');

export default class MapScreen extends React.Component
{
  state = {
    location: [-48.669154, -26.903866],
  }

  // renderAnnotations() {
  //   return (
  //     <MapboxGL.PointAnnotation
  //       id='rocketseat'
  //       coordinate={[-48.669154, -26.903866]}
  //     >
  //       <View style={styles.annotationContainer}>
  //         <View style={styles.annotationFill} />
  //       </View>
  //       <MapboxGL.Callout title='Rocketseat House' />
  //     </MapboxGL.PointAnnotation>
  //   )
  // }

  render() {
    const zooLevel  = 16;
    const logoEnabled = false;
    const compassEnabled = true;
    const rotateEnabled = true;

    return (
      <View style={styles.container}>

            <View style={{
                position: 'absolute',
                zIndex: 9,
                padding: 22,
                paddingTop:50
              }}>
                  <Icon
                    size={30}
                    name={this.props.mContext.state.isOpen ? 'times' : 'bars'}
                    color='#000'
                    onPress={() => {
                      this.props.mContext.setState({
                        isOpen: !this.props.mContext.state.isOpen
                      })
                    }} />
              </View>

              <View style={{
                position: 'absolute',
                zIndex: 9,
                right: -3,
                paddingTop:50
              }}>
                  <View style={{
                    height: 30,
                    backgroundColor: 'orange',
                    borderRadius: 4,
                  }}>
                    <Text style={{
                      fontWeight: 600, padding:6,
                      paddingRight: 20
                    }}> Olá, Joao Silva</Text>
                  </View>
              </View>

            {/* <MapboxGL.MapView
              ref={c => this.map = c}
              rotateEnabled={rotateEnabled}
              logoEnabled={logoEnabled}
              compassEnabled={compassEnabled}
              zoomLevel={zooLevel}
              onRegionWillChange={this.onRegionWillChange}
              centerCoordinate={this.state.location}
              style={styles.container}
              showUserLocation
              onUserLocationUpdate={(lo) => {
                if(this.state.location[0] != lo.coords.longitude && 
                              this.state.location[1] != lo.coords.latitude){
                                this.setState({
                                  location: [lo.coords.longitude, lo.coords.latitude]
                                })
                }
              }}
              styleURL={MapboxGL.StyleURL.Light}
            >
                {this.renderAnnotations()}
            </MapboxGL.MapView> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#cdcdcd',
    borderRadius: 15,
  },
  annotationFill: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: 'orange',
    transform: [{ scale: 0.8 }],
  },
  btn: {
    backgroundColor: '#4F67FF',
    padding: 30,
    borderRadius: 5
  },
  btnText: {
    color: '#fff'
  }
});