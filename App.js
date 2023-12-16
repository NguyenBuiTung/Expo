import React from 'react'
import Navigation from './src/router/Navigation'
import { AuthProvider } from './src/context/AuthContext'
import { Provider } from 'react-redux'
import { NativeBaseProvider } from 'native-base'
import { store } from './src/redux/configStore '

export default function App() {
  return (
    <Provider store={store}>
      <AuthProvider>
        <NativeBaseProvider>
          <Navigation />
        </NativeBaseProvider>
      </AuthProvider>
    </Provider>
  )
}
