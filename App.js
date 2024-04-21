// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.containerTop}>
//         <View style={styles.top}>
//           <Text style={styles.topText}>Top left</Text>
//         </View>
//       </View>
//       <View style={styles.containerCenter}>
//         <View style={styles.center}>
//           <Text style={styles.centerText}>Center</Text>
//         </View>
//       </View>
//       <View style={styles.containerBottom}>
//         <View style={styles.bottom}>
//           <Text style={styles.bottomText}>Bottom Right</Text>
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     backgroundColor: "#e3fefe",
//     flex: 1,
//   },
//   containerTop: {
//     flex: 1,
//   },
//   top: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderWidth: 1,
//     borderColor: "red",
//     backgroundColor: "#ffffff",
//   },
//   topText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "#419fc2",
//   },
//   containerCenter: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   center: {
//     width: 150,
//     height: 150,
//     borderRadius: 100,
//     justifyContent: "center",
//     backgroundColor: "#2cff56",
//   },
//   centerText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "center",
//     color: "#10a095",
//   },
//   containerBottom: {
//     flex: 1,
//   },
//   bottom: {
//     marginTop: 80,
//     marginHorizontal: 40,
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 15,
//     backgroundColor: "#7ee6fd",
//   },
//   bottomText: {
//     fontSize: 20,
//     fontWeight: "bold",
//     textAlign: "right",
//     color: "white",
//   },
// });

/* 1 bài */

// import React, { Component } from 'react'
// import { Text, StyleSheet, View } from 'react-native'

// export default class App extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <View style={styles.top}>
//           <Text style={styles.topText}>Top left</Text>
//         </View>
//         <View style={styles.bottom}>
//           <View style={styles.bottomLeft}></View>
//           <View style={styles.bottomRight}>
//             <View style={styles.bottomRightTop}></View>
//             <View style={styles.bottomRightBottom}></View>
//           </View>
//         </View>
//       </View>
//     )
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   top: {
//     flex: 1,
//     backgroundColor: '#f4fe87',
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   topText: {
//     fontWeight: 'bold',
//     fontSize: 20,
//     color: '#21a3d0'
//   },
//   bottom: {
//     flex: 1,
//     backgroundColor: 'red',
//     flexDirection: 'row'
//   },
//   bottomLeft: {
//     flex: 1,
//     backgroundColor: 'red',
//   },
//   bottomRight: {
//     flex: 1,
//     backgroundColor: 'green',
//   },
//   bottomRightTop: {
//     flex: 2,
//     backgroundColor: 'green',
//   },
//   bottomRightBottom: {
//     flex: 1,
//     backgroundColor: 'blue',
//   }
// })

import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";
import Task from "./components/Task";
import styles from "./App.component.style";
import Form from "./components/Form";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>Todo List</Text>
          <ScrollView style={styles.items}>
            <Task />
            <Task />
            <Task />
          </ScrollView>
        </View>
        <Form />
      </View>
    );
  }
}
