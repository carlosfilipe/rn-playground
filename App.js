import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Main from './src';

export default function App() {
  return (
    <>
      <StatusBar  barStyle="light-content"  backgroundColor="rgba(0,0,0,0.6)" translucent={false} />
      <Main />
    </>
  );
}
