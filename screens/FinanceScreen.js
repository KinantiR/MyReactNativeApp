import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { PieChart } from 'react-native-svg-charts';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { G, Text as SVGText } from 'react-native-svg';

const FinanceScreen = () => {
  const insets = useSafeAreaInsets();
  const transactions = [
    {
      id: '1',
      type: 'Makanan',
      description: 'Sarapan & kopi',
      amount: -50000,
      date: '2025-07-02',
      icon: 'utensils',
      color: '#F8B195'
    },
    {
      id: '2',
      type: 'Transportasi',
      description: 'Gojek ke kantor',
      amount: -20000,
      date: '2025-07-02',
      icon: 'car',
      color: '#F8B195'
    },
    {
      id: '3',
      type: 'Gaji',
      description: 'Gaji freelance',
      amount: 1000000,
      date: '2025-07-01',
      icon: 'dollar-sign',
      color: '#9DE0AD'
    }
  ];

const Labels = ({ slices }) => {
  return slices.map((slice, index) => {
    const { pieCentroid, data } = slice;
    return (
     <G key={index}>
        <SVGText
          x={pieCentroid[0]}
          y={pieCentroid[1]}
          fill="black"
          textAnchor="middle"
          alignmentBaseline="middle"
          fontSize={12}
          stroke="none"
        >
          {data.label}
        </SVGText>
      </G>
    );
  });
};

  const totalIncome = 2500000;
  const totalExpense = 1750000;
  const currentBalance = totalIncome - totalExpense;

  const pieData = [
    {
      key: 1,
      value: totalIncome,
      svg: { fill: '#9DE0AD' },
      label: 'Income',
    },
    {
      key: 2,
      value: totalExpense,
      svg: { fill: '#F8B195' },
      label: 'Expenses',

  
    }
  ];

  return (
    <View style={[styles.container, { paddingTop: insets.top }]}>
      <Text style={styles.title}>Keuangan Saya</Text>
      <Text style={styles.subTitle}>Periode: 1 – 7 Juli 2025</Text>

      <View style={styles.cardContainer}>
        <View style={styles.card}>
          <MaterialCommunityIcons name="briefcase" size={24} color="#D9A74A" />
          <Text style={styles.cardLabel}>Total Pemasukan</Text>
          <Text style={styles.cardValue}>Rp {totalIncome.toLocaleString()}</Text>
        </View>
        <View style={styles.card}>
          <MaterialCommunityIcons name="wallet-outline" size={24} color="#E76F51" />
          <Text style={styles.cardLabel}>Total Pengeluaran</Text>
          <Text style={[styles.cardValue, { color: '#E76F51' }]}>-Rp {totalExpense.toLocaleString()}</Text>
        </View>
        <View style={styles.card}>
          <FontAwesome5 name="dollar-sign" size={24} color="#2A9D8F" />
          <Text style={styles.cardLabel}>Saldo Minggu Ini</Text>
          <Text style={[styles.cardValue, { color: '#2A9D8F' }]}>Rp {currentBalance.toLocaleString()}</Text>
        </View>
      </View>

      <View style={styles.chartContainer}>
  <PieChart style={{ height: 140 }} data={pieData}
    valueAccessor={({ item }) => item.value}>
    <Labels />
  </PieChart>
  <View style={styles.legend}>
    <View style={styles.legendRow}>
      <View style={[styles.legendDot, { backgroundColor: '#9DE0AD' }]} />
      <Text>Income</Text>
    </View>
    <View style={styles.legendRow}>
      <View style={[styles.legendDot, { backgroundColor: '#F8B195' }]} />
      <Text>Expenses</Text>
    </View>
  </View>
</View>


      <Text style={styles.sectionTitle}>Daftar Transaksi</Text>
      <FlatList
        data={transactions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.transactionItem}>
            <View style={styles.iconWrapper}>
              <FontAwesome5 name={item.icon} size={18} color={item.color} />
            </View>
            <View style={styles.transactionDetails}>
              <Text style={styles.transactionTitle}>{item.type}</Text>
              <Text style={styles.transactionDesc}>{item.description}</Text>
            </View>
            <View style={styles.transactionAmount}>
              <Text style={{ color: item.amount < 0 ? '#E76F51' : '#2A9D8F' }}>
                {item.amount < 0 ? '-' : '+'}Rp {Math.abs(item.amount).toLocaleString()}
              </Text>
              <Text style={styles.transactionDate}>{item.date}</Text>
            </View>
          </View>
        )}
      />
    </View>
    
  );
};


export default FinanceScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8F3',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20
  },
  subTitle: {
    color: '#555',
    marginBottom: 10
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  card: {
    backgroundColor: '#FFF',
    padding: 10,
    width: '30%',
    borderRadius: 12,
    alignItems: 'center',
    elevation: 2
  },
  cardLabel: {
    fontSize: 12,
    marginTop: 5,
    textAlign: 'center'
  },
  cardValue: {
    fontWeight: 'bold',
    fontSize: 14,
    marginTop: 5
  },
  chartContainer: {
    backgroundColor: '#FFF',
    padding: 10,
    borderRadius: 12,
    marginTop: 20,
    alignItems: 'center'
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10
  },
  legendRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 10
  },
  legendDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 6
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 15
  },
  transactionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10
  },
  iconWrapper: {
    width: 30,
    alignItems: 'center'
  },
  transactionDetails: {
    flex: 1,
    marginLeft: 10
  },
  transactionTitle: {
    fontWeight: 'bold'
  },
  transactionDesc: {
    color: '#888',
    fontSize: 12
  },
  transactionAmount: {
    alignItems: 'flex-end'
  },
  transactionDate: {
    fontSize: 12,
    color: '#888'
  }
});
