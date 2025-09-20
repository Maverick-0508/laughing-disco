import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, Alert, ScrollView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  const [user] = useState({
    name: 'John Doe',
    email: 'john.doe@email.com',
    avatar: 'https://i.pravatar.cc/150?img=12', // demo avatar
  });

  const handleLogout = () => {
    Alert.alert('Logout', 'Are you sure you want to log out?', [
      { text: 'Cancel', style: 'cancel' },
      { text: 'Logout', onPress: () => navigation.replace('Login') },
    ]);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header with avatar */}
      <View style={styles.header}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.email}>{user.email}</Text>
      </View>

      {/* Options list */}
      <View style={styles.section}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Edit Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option} onPress={() => navigation.navigate('PaymentMethods')}>
  <Text style={styles.optionText}>Payment Methods</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.option} onPress={() => navigation.navigate('Addresses')}>
  <Text style={styles.optionText}>Delivery Addresses</Text>
</TouchableOpacity>

        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Notifications</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.optionText}>Help & Support</Text>
        </TouchableOpacity>
      </View>

      {/* Logout */}
      <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
        <Text style={styles.logoutText}>Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { alignItems: 'center', marginVertical: 30 },
  avatar: { width: 90, height: 90, borderRadius: 45, marginBottom: 12 },
  name: { fontSize: 20, fontWeight: 'bold' },
  email: { fontSize: 14, color: '#666', marginBottom: 20 },
  section: { borderTopWidth: 1, borderBottomWidth: 1, borderColor: '#eee' },
  option: {
    padding: 15,
    borderBottomWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fafafa',
  },
  optionText: { fontSize: 16, color: '#333' },
  logoutButton: {
    backgroundColor: '#ff3b30',
    padding: 15,
    margin: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
