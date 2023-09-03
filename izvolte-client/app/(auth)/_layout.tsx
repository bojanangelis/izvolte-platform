import { Stack } from 'expo-router/stack'
import { useColorScheme } from 'react-native'

export default function AuthLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='index' />
      <Stack.Screen name='login' />

      {/* <AuthStack.Screen name="StartUp" component={StartUp} />
      <AuthStack.Screen name="GetStarted" component={GetStarted} />
      <AuthStack.Screen name="SignUpScreen" component={SignUpScreen} />
      <AuthStack.Screen name="ConfirmEmail" component={ConfirmEmailScreen} />
      <AuthStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
      />
      <AuthStack.Screen
        name="ConfirmNewCodeForPasswordReset"
        component={ConfirmNewCodeForPasswordReset}
      />
      <AuthStack.Screen name="NewPassword" component={NewPasswordScreen} />
    </AuthStack.Navigator> */}
    </Stack>
  )
}
