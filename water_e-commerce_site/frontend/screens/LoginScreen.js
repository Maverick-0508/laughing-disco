import React, { useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function LoginScreen({ onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://i.ibb.co/tMZL9rS/beverage-logo.png' }} style={styles.logo} />
      <Text style={styles.title}>Welcome to Beverage Hub</Text>

      <TextInput
        style={styles.input}
        placeholder="Email or Phone"
        value={email}
        onChangeText={setEmail}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.loginButton} onPress={onLogin}>
        <Text style={styles.loginText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.footer}>New here? Sign up</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center',
    backgroundColor: '#fff', padding: 20
  },
  logo: { width: 120, height: 120, marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    width: '100%', borderWidth: 1, borderColor: '#ccc',
    padding: 12, borderRadius: 10, marginBottom: 15
  },
  loginButton: {
    backgroundColor: '#1e90ff', padding: 15,
    borderRadius: 12, width: '100%', alignItems: 'center'
  },
  loginText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  footer: { marginTop: 15, color: '#666' }
});
