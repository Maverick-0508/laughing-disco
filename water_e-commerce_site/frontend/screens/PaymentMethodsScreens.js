import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Alert } from 'react-native';

export default function PaymentMethodsScreen() {
  const [methods, setMethods] = useState([
    { id: '1', type: 'Visa', last4: '1234' },
    { id: '2', type: 'MasterCard', last4: '5678' },
  ]);

  const addMethod = () => {
    Alert.alert('Add Payment Method', 'Feature coming soon...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Payment Methods 💳</Text>

      <FlatList
        data={methods}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.method}>
            <Text style={styles.text}>{item.type} •••• {item.last4}</Text>
          </View>
        )}
      />

      <TouchableOpacity style={styles.button} onPress={addMethod}>
        <Text style={styles.buttonText}>+ Add Payment Method</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  method: {
    padding: 15, borderWidth: 1, borderColor: '#eee',
    borderRadius: 10, marginBottom: 10,
  },
  text: { fontSize: 16 },
  button: {
    backgroundColor: '#1e90ff', padding: 15,
    borderRadius: 10, alignItems: 'center', marginTop: 20,
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
