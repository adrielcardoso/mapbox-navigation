// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow
//  */

// import React, { Component } from "react";
// import {
//   Platform,
//   StyleSheet,
//   Text,
//   View,
//   Button,
//   PermissionsAndroid
// } from "react-native";
// import NavigationView from "./NavigationView";
// import { NativeModules } from "react-native";

// type Props = {};
// export default class App extends Component<Props> {
//   state = {
//     granted: Platform.OS === "ios",
//     fromLat: -26.903535,
//     fromLong: -48.668479,
//     toLat: -26.928310,
//     toLong: -48.683519
//   };

//   componentDidMount() {
//     if (!this.state.granted) {
//       this.requestFineLocationPermission();
//     }
//   }

//   async requestFineLocationPermission() {
//     try {
//       const granted = await PermissionsAndroid.request(
//         PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
//         {
//           title: "ACCESS_FINE_LOCATION",
//           message: "Mapbox navigation needs ACCESS_FINE_LOCATION"
//         }
//       );
//       if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//         this.setState({ granted: true });
//       } else {
//         console.log("ACCESS_FINE_LOCATION permission denied");
//       }
//     } catch (err) {
//       console.warn(err);
//     }
//   }

//   render() {
//     const { granted, fromLat, fromLong, toLat, toLong } = this.state;
//     return (
//       <View style={styles.container}>
//           {granted && (
//             <NavigationView
//               style={styles.navigation}
//               destination={{
//                 lat: toLat,
//                 long: toLong
//               }}
//               origin={{
//                 lat: fromLat,
//                 long: fromLong
//               }}
//             />
//           )}
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "stretch",
//     backgroundColor: "whitesmoke"
//   },
//   subcontainer: {
//     flex: 1,
//     justifyContent: "center",
//     backgroundColor: "whitesmoke"
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: "center",
//     margin: 10
//   },
//   navigation: {
//     backgroundColor: "gainsboro",
//     flex: 1
//   }
// });
