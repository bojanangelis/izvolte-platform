import { Image, Pressable, TouchableOpacity } from 'react-native'

import React from 'react'
import { TextInput } from 'react-native-gesture-handler'
import { AntDesign } from '@expo/vector-icons'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, View } from '../../components/Themed'

const Login = () => {
  const onTermsOfUsePressed = () => {
    console.warn('onTermsOfUsePressed')
  }
  const onPrivacyPressed = () => {
    console.warn('privacy pressed')
  }

  return (
    <SafeAreaView className='flex-1 bg-white p-5 pt-[25%]'>
      <Text className='text-xl py-2 font-bold text-black text-left'>
        Sign in with your izvolte account
      </Text>
      <View className='py-4'>
        <Text className='font-medium text-black mb-1.5'>Enter your email address</Text>
        <TextInput
          className='p-4 bg-gray-100 rounded'
          // value={email}
          // onChangeText={(text: string) => setEmail(text)}
          placeholder='Type your email'
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          autoComplete='email'
        />
      </View>
      <View>
        <Text className='font-medium text-black mb-1.5'>Enter your password</Text>
        <TextInput
          className='p-4 bg-gray-100 rounded'
          // value={password}
          // onChangeText={(text: string) => setPassword(text)}
          placeholder='Type your password'
          autoCapitalize='none'
          secureTextEntry={true}
          keyboardType='visible-password'
        />
      </View>
      <TouchableOpacity
      // onPress={() => navigation.navigate('ForgotPassword')}
      >
        <Text className='text-sm text-gray-500 text-right my-1'>Forgot password</Text>
      </TouchableOpacity>
      <TouchableOpacity
        className='flex p-2 my-2 flex-row items-center justify-between w-full bg-[#f7d639] rounded'
        // disabled={loading}
        // onPress={handleSignIn}
      >
        <Text> </Text>
        <Text className='font-bold text-white'>Sign in</Text>
        <AntDesign name='arrowright' size={22} color='white' />
      </TouchableOpacity>
      <Text className='text-sm text-gray-500 my-1'>
        By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated
        means, from Izvolte and its affiliates to the number provided.
        <Text className='text-gray-800' onPress={onTermsOfUsePressed}>
          {' '}
          Terms of Use
        </Text>{' '}
        and
        <Text className='text-gray-800' onPress={onPrivacyPressed}>
          {' '}
          Privacy Policy.
        </Text>
      </Text>
      <View className='flex flex-row justify-between pt-4 items-center w-[90%] mx-auto'>
        <View className='border-b border-gray-300 w-1/2  mx-auto my-2'></View>
        <Text className='text-sm text-gray-500 text-center px-4'>or</Text>
        <View className='border-b border-gray-300 w-1/2 mx-auto my-2'></View>
      </View>

      <View className='pt-8'>
        <TouchableOpacity className='border rounded p-4 border-gray-400 flex flex-row items-center'>
          <Image
            className='w-4 h-4 object-contain'
            source={require('../../assets/images/googleLogo.png')}
            alt='google'
          />
          <Text className='font-bold text-center text-gray-800 w-full'>Continue with Google</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity className='absolute bottom-14 left-6 p-4 bg-gray-100 rounded-full'>
        <AntDesign name='arrowleft' size={25} color='black' />
      </TouchableOpacity>
    </SafeAreaView>
  )
}

// const styles = StyleSheet.create({
// viewIcon: {
//   position: 'absolute',
//   left: 25,
//   bottom: 50,
//   width: 50,
//   height: 50,
//   borderRadius: 25,
//   backgroundColor: 'whitesmoke',
//   justifyContent: 'center',
//   alignItems: 'center',
// },
// forgotPasswordText: {
//   color: 'gray',
// },
// forgotPasswordButton: {
//   marginVertical: 10,
// },
// textInputLabel: {
//   fontWeight: '500',
//   color: 'black',
//   marginBottom: 5,
// },
// inputContainerView: {
//   paddingVertical: 10,
// },

// dividerContainer: {
//   display: 'flex',
//   justifyContent: 'center',
//   flexDirection: 'row',
//   marginTop: 20,
// },
// dividerText: {
//   textAlign: 'center',
//   color: 'gray',
//   paddingHorizontal: 5,
// },
// divider: {
//   width: '45%',
//   borderTopWidth: 1,
//   paddingVertical: 10,
//   marginVertical: 10,
// },
// arrowNext: {},
// buttonNext: {
//   display: 'flex',
//   flexDirection: 'row',
//   alignItems: 'center',
//   justifyContent: 'space-between',
//   width: '100%',
//   backgroundColor: '#f7d639',
//   borderRadius: 2,
//   padding: 10,
//   paddingHorizontal: 20,
//   marginVertical: 10,
// },
// buttonNextText: {
//   color: 'white',
//   fontSize: 18,
//   fontWeight: '700',
//   letterSpacing: 2,
// },
// root: {
//   backgroundColor: 'white',
//   flex: 1,
//   padding: 20,
//   paddingTop: '25%',
// },
// title: {
//   fontSize: 20,
//   paddingBottom: 20,
//   fontWeight: 'bold',
//   color: 'black',
//   textAlign: 'left',
// },
// inputContainer: {
//   backgroundColor: '#EEEEEE',
//   width: '100%',
//   padding: 20,
//   borderRadius: 2,
// },
// text: {
//   color: 'gray',
//   marginVertical: 10,
// },
// link: {
//   color: '#FDB075',
// },
// });

export default Login
