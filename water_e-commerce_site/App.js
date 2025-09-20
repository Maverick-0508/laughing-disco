import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import LoginScreen from './frontend/LoginScreen';
import BottomTabs from './navigation/BottomTabs';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      {isLoggedIn ? (
        <BottomTabs />
      ) : (
        <LoginScreen onLogin={() => setIsLoggedIn(true)} />
      )}
    </NavigationContainer>
  );
}
