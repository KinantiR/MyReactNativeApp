import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { MaterialIcons, FontAwesome5, Feather } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import styles from '../styles/dashboardStyles'; // Adjust the path as necessary

const DashboardScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  return (
    <LinearGradient
      colors={['#3b82f6', '#60a5fa']}
      style={[styles.gradientContainer, { paddingTop: insets.top }]}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.header}>DASHBOARD</Text>
        <View style={styles.line} />

        <View style={styles.row}>
          <Text style={styles.welcome}>Welcome, Members</Text>
          <TouchableOpacity style={styles.datePicker}>
            <Text style={styles.dateText}>June 2025</Text>
            <MaterialIcons name="calendar-today" size={16} color="#000" />
          </TouchableOpacity>
        </View>

        <View style={styles.cardGrid}>
          <TouchableOpacity style={styles.card}>
            <MaterialIcons name="event-note" size={36} color="#2563eb" />
            <Text style={styles.cardTitle}>Aktivitas Hari Ini</Text>
            <Text style={styles.cardInfo}>3 aktivitas dijadwalkan</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <MaterialIcons name="check-circle" size={36} color="#16a34a" />
            <Text style={styles.cardTitle}>Aktivitas Selesai</Text>
            <Text style={styles.cardInfo}>2 selesai</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Keuangan')}>
            <FontAwesome5 name="wallet" size={32} color="#f59e0b" />
            <Text style={styles.cardTitle}>Finance</Text>
            <Text style={styles.cardInfo}>Rp 12.500.000</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card}>
            <Feather name="box" size={32} color="#9333ea" />
            <Text style={styles.cardTitle}>Inventory</Text>
            <Text style={styles.cardInfo}>18 item tersedia</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.card2}>
            <MaterialIcons name="bar-chart" size={36} color="#1e3a8a" />
            <Text style={styles.cardTitle}>Reports</Text>
            <Text style={styles.cardInfo}>5 laporan bulan ini</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </LinearGradient>
  );
};

export default DashboardScreen;


