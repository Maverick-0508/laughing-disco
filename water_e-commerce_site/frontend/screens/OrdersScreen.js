import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

export default function OrdersScreen() {
  const [orders] = useState([
    { id: '1', items: ['Coca-Cola 500ml', 'Red Bull Blue Edition'], total: 4.2, date: '2025-09-10' },
    { id: '2', items: ['Dasani Water 1L'], total: 1.0, date: '2025-09-15' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Orders 📦</Text>

      {orders.length === 0 ? (
        <Text style={styles.empty}>No orders yet</Text>
      ) : (
        <FlatList
          data={orders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.order}>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.items}>{item.items.join(', ')}</Text>
              <Text style={styles.total}>Total: ${item.total.toFixed(2)}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  empty: { textAlign: 'center', fontSize: 16, color: '#777', marginTop: 50 },
  order: {
    padding: 12, borderWidth: 1, borderColor: '#eee', borderRadius: 8, marginBottom: 12
  },
  date: { fontWeight: 'bold', marginBottom: 5 },
  items: { color: '#555' },
  total: { marginTop: 5, fontWeight: '600' },
});
