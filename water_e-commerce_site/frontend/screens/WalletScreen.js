import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

export default function WalletScreen() {
  const [balance, setBalance] = useState(20.00); // default balance
  const [amount, setAmount] = useState('');

  const handleTopUp = () => {
    const val = parseFloat(amount);
    if (!isNaN(val) && val > 0) {
      setBalance(balance + val);
      setAmount('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Wallet 💳</Text>
      <Text style={styles.balance}>Balance: ${balance.toFixed(2)}</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter top-up amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      <TouchableOpacity style={styles.button} onPress={handleTopUp}>
        <Text style={styles.buttonText}>Top Up</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  balance: { fontSize: 18, marginBottom: 20, textAlign: 'center' },
  input: {
    borderWidth: 1, borderColor: '#ccc', padding: 12,
    borderRadius: 10, marginBottom: 20, fontSize: 16,
  },
  button: {
    backgroundColor: '#1e90ff', padding: 15, borderRadius: 10,
    alignItems: 'center'
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
