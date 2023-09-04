import React from 'react'
import { Text, View } from '../../components/Themed'
import { Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Link } from 'expo-router'

const IndexAuth = () => {
  return (
    <View className='bg-white flex-1 h-full items-center justify-center'>
      <Image
        source={require('../../assets/images/loginLogo.jpg')}
        className='w-full h-4/5 items-center justify-center z-10'
      />
      <Image
        source={require('../../assets/images/izvolte.jpeg')}
        className='object-contain h-16 w-28 absolute top-24 left-8 z-50 rounded'
      />
      <View className='flex z-10 w-full h-1/5 items-center'>
        <Text className='text-2xl tracking-wide font-mono font-semibold py-3'>
          Get started with Izvolte
        </Text>
        <TouchableOpacity className='w-full bg-[#f7d639] px-4 py-3 rounded'>
          <Text className='text-white text-lg font-bold font-mono'>See stores nearby</Text>
        </TouchableOpacity>
        <Link href='/(auth)/login' className='pt-2'>
          <Text className='text-lg font-mono font-semibold'>Sign up or log in</Text>
        </Link>
      </View>
    </View>
  )
}

export default IndexAuth
