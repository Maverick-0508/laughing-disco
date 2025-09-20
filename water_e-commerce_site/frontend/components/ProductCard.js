import React, {useContext} from 'react';
import { CartContext } from '../../context/CartContext';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function ProductCard({ item, onAdd }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.name}</Text>
      <Text style={styles.price}>${item.price}</Text>
      
      <TouchableOpacity style={styles.addButton} onPress={() => onAdd(item)}>
        <Text style={styles.addText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 10,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: { width: 100, height: 100, borderRadius: 10, marginBottom: 8 },
  title: { fontSize: 14, fontWeight: '600', textAlign: 'center' },
  price: { fontSize: 13, color: '#555', marginVertical: 5 },
  addButton: {
    backgroundColor: '#1e90ff',
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginTop: 5,
  },
  addText: { color: '#fff', fontWeight: 'bold' }
});
