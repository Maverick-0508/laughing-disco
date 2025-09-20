import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function AddressesScreen() {
  const [addresses, setAddresses] = useState([
    { id: '1', label: 'Home', address: '123 Main St, Nairobi' },
    { id: '2', label: 'Work', address: '456 Business Rd, Nairobi' },
  ]);

  const addAddress = () => {
    Alert.alert('Add Address', 'Feature coming soon...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Delivery Addresses 📍</Text>

      <FlatList
        data={addresses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.address}>
            <Text style={styles.label}>{item.label}</Text>
            <Text style={styles.text}>{item.address}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={addAddress}>
        <Text style={styles.buttonText}>+ Add New Address</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  address: {
    padding: 15, borderWidth: 1, borderColor: '#eee',
    borderRadius: 10, marginBottom: 10,
  },
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 4 },
  text: { fontSize: 16 },
  button: {
    backgroundColor: '#1e90ff', padding: 15,
    borderRadius: 10, alignItems: 'center', marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
