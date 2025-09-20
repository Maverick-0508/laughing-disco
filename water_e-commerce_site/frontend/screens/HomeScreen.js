import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ProductCard from '../components/ProductCard';
import CategoryTabs from '../components/CategoryTabs';

export default function HomeScreen() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = ["All", "Water", "Soda", "Juices", "Energy Drinks"];

  const products = [
    // Water
    { id: '1', category: 'Water', name: 'Dasani Water 1L', price: 1.0, image: 'https://i.ibb.co/ggQZfX1/water.png' },
    { id: '2', category: 'Water', name: 'AQUAFINA 500ml', price: 1.2, image: 'https://i.ibb.co/Z6qGSLx/water-bottle.png' },

    // Soda
    { id: '3', category: 'Soda', name: 'Coca-Cola 500ml', price: 1.5, image: 'https://i.ibb.co/1dYkYVm/coke.png' },
    { id: '4', category: 'Soda', name: 'Sprite 500ml', price: 1.4, image: 'https://i.ibb.co/k4HJw1f/sprite.png' },
    { id: '5', category: 'Soda', name: 'Fanta Orange 500ml', price: 1.4, image: 'https://i.ibb.co/XtFVY0H/fanta.png' },

    // Juices
    { id: '6', category: 'Juices', name: 'Minute Maid Apple 1L', price: 2.0, image: 'https://i.ibb.co/NjT6KXY/apple-juice.png' },
    { id: '7', category: 'Juices', name: 'Tropicana Orange 1L', price: 2.2, image: 'https://i.ibb.co/fvbTYnp/orange-juice.png' },

    // Energy Drinks (Red Bull editions)
    { id: '8', category: 'Energy Drinks', name: 'Red Bull Original 250ml', price: 2.5, image: 'https://i.ibb.co/JmczhGQ/redbull.png' },
    { id: '9', category: 'Energy Drinks', name: 'Red Bull Blue Edition (Blueberry)', price: 2.7, image: 'https://i.ibb.co/tQjQ39J/redbull-blue.png' },
    { id: '10', category: 'Energy Drinks', name: 'Red Bull Yellow Edition (Tropical)', price: 2.7, image: 'https://i.ibb.co/qmH7Gff/redbull-yellow.png' },
    { id: '11', category: 'Energy Drinks', name: 'Monster Energy 350ml', price: 2.0, image: 'https://i.ibb.co/d5jRrMC/monster.png' },
  ];

  const filteredProducts = products.filter((p) => {
    const matchesCategory = selectedCategory === "All" || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
    

  const handleAdd = (item) => {
    alert(`${item.name} added to cart!`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Browse Beverages 🍹</Text>

    {/* Search Bar */ 
    <SearchBar query={searchQuery} onChange={setSearchQuery} />}

      {/* Category Tabs */}
      <CategoryTabs
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
        numColumns={2}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard item={item} onAdd={handleAdd} />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa', padding: 10 },
  heading: {
    fontSize: 22, fontWeight: 'bold',
    marginBottom: 10, textAlign: 'center'
  },
});
