import { Platform, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import Lottie from 'lottie-react-native'
import { useRef, useState } from 'react'
import { Text } from '../../components/Themed'

export default function TabOneScreen() {
  const animationRef = useRef<Lottie>(null)
  const [showAnimation, setShowAnimation] = useState<boolean>(true)

  return (
    <SafeAreaView className='flex-1 items-center justify-center'>
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30, ios: 10 }),
        }}
        refreshControl={
          <RefreshControl
            onRefresh={() => {
              setShowAnimation(true)
              animationRef.current?.play()
            }}
            refreshing={false}
            tintColor={'transparent'}
          />
        }
      >
        {showAnimation && (
          <Lottie
            ref={animationRef}
            resizeMode='contain'
            source={require('../../assets/animations/animation_lm0u1qb2.json')}
            style={{ width: 120, height: 120 }}
            loop={false}
            autoPlay
            onAnimationFinish={() => {
              animationRef.current?.pause()
              setTimeout(() => {
                setShowAnimation(false)
              }, 1000)
            }}
          />
        )}
        <Text>dadada</Text>
        <Text>dadada</Text>
        <Text>dadada</Text>
        <Text>dadada</Text>
        <Text>dadada</Text>
      </ScrollView>
    </SafeAreaView>
  )
}
