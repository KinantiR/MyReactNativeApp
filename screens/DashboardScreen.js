import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import DashboardCard from '../components/DashboardCard';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Dashboard</Text>
      <View style={styles.cardContainer}>
        <DashboardCard title="Total Sales" value="Rp 25.000.000" />
        <DashboardCard title="Orders" value="150" />
        <DashboardCard title="Users" value="320" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 16, backgroundColor: '#fff' },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 16 },
  cardContainer: { flexDirection: 'column', gap: 12 },
});

export default DashboardScreen;
