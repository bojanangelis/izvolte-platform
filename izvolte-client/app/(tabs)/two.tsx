// import EditScreenInfo from '../../components/EditScreenInfo'
import { Text, View } from '../../components/Themed'

export default function TabTwoScreen() {
  return (
    <View>
      <Text>Tab Two</Text>
      <View lightColor='#eee' darkColor='rgba(255,255,255,0.1)' />
      {/* <EditScreenInfo path='app/(tabs)/two.tsx' /> */}
    </View>
  )
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });
