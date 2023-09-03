import React from 'react'
import { Text, View } from '../../components/Themed'
import { Image, SafeAreaView } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { TouchableOpacity } from 'react-native-gesture-handler'

const IndexAuth = () => {
  return (
    <View className='bg-white flex-1 items-center justify-center'>
      <Image
        source={require('../../assets/images/loginLogo.jpg')}
        className='w-full h-full items-center justify-center'
      />
      <View className='flex z-10 w-full items-center px-5 mb-40'>
        <Animatable.Text
          className='text-2xl tracking-wide py-5 font-semibold text-left'
          animation='fadeIn'
          iterationCount={1}
        >
          Get started with Izvolte
        </Animatable.Text>
        <TouchableOpacity className='w-full bg-[#f7d639] p-4 rounded'>
          <Text className='text-white text-lg font-bold font-mono'>See stores nearby</Text>
        </TouchableOpacity>
        <TouchableOpacity
          //@ts-ignore
          onPress={() => navigation.navigate('GetStarted')}
        >
          <Text>Sign up or log in</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default IndexAuth
