import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const DashboardCard = ({ title, value }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 16,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: { fontSize: 16, color: '#333' },
  value: { fontSize: 20, fontWeight: 'bold', color: '#000' },
});

export default DashboardCard;
