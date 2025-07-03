import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const DashboardScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.header}>DASHBOARD</Text>
      <View style={styles.line} />

      <View style={styles.row}>
        <Text style={styles.welcome}>Welcome, Members</Text>
        <TouchableOpacity style={styles.datePicker}>
          <Text style={styles.dateText}>June 2025</Text>
          <MaterialIcons name="calendar-today" size={16} color="#000" />
        </TouchableOpacity>
      </View>

      <View style={styles.cardRow}>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="bar-chart" size={40} color="#000" />
          <Text style={styles.cardTitle}>Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card}>
          <MaterialIcons name="pie-chart" size={40} color="#000" />
          <Text style={styles.cardTitle}>Balance Value</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 4,
  },
  line: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    marginBottom: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 16,
    fontWeight: '500',
  },
  datePicker: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#000',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  dateText: {
    marginRight: 6,
    fontSize: 14,
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 24,
  },
  card: {
    width: '48%',
    aspectRatio: 1,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardTitle: {
    marginTop: 8,
    fontSize: 14,
    fontWeight: '500',
  },
});
