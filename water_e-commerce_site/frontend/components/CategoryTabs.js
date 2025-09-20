import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function CategoryTabs({ categories, selected, onSelect }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.container}>
      {categories.map((cat) => (
        <TouchableOpacity
          key={cat}
          style={[styles.tab, selected === cat && styles.activeTab]}
          onPress={() => onSelect(cat)}
        >
          <Text style={[styles.tabText, selected === cat && styles.activeText]}>{cat}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  tab: {
    paddingVertical: 8, paddingHorizontal: 16,
    borderRadius: 20, backgroundColor: '#eee',
    marginRight: 10
  },
  activeTab: { backgroundColor: '#1e90ff' },
  tabText: { fontSize: 14, color: '#333' },
  activeText: { color: '#fff', fontWeight: '600' },
});
