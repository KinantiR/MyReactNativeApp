import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Screen = ({ title }) => (
  <View style={styles.container}>
    <Text style={styles.text}>{title} Page</Text>
  </View>
);

export default function ScreenName () {
  return <Screen title="[FinanceScreen]" />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center'
  },
  text: {
    fontSize: 18, fontWeight: 'bold'
  }
});
