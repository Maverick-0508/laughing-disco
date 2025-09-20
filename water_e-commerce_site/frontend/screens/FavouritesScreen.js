import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

export default function FavouritesScreen() {
  const [favourites, setFavourites] = useState([
    { id: '1', name: 'Red Bull Blue Edition (Blueberry)', price: 2.7 },
    { id: '2', name: 'Coca-Cola 500ml', price: 1.5 },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Favourites ❤️</Text>

      {favourites.length === 0 ? (
        <Text style={styles.empty}>No favourites saved</Text>
      ) : (
        <FlatList
          data={favourites}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.item}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>${item.price.toFixed(2)}</Text>
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
  item: {
    flexDirection: 'row', justifyContent: 'space-between',
    padding: 12, borderBottomWidth: 1, borderColor: '#eee'
  },
  name: { fontSize: 16 },
  price: { fontWeight: '600' },
});
