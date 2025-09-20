import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { CartContext } from '../context/CartContext';

export default function CartScreen() {
  const { cartItems, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Your Cart 🛒</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.empty}>Your cart is empty</Text>
      ) : (
        <>
          <FlatList
            data={cartItems}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.cartItem}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.qtyRow}>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.qty - 1)}>
                    <Text style={styles.qtyButton}>-</Text>
                  </TouchableOpacity>
                  <Text style={styles.qtyText}>{item.qty}</Text>
                  <TouchableOpacity onPress={() => updateQuantity(item.id, item.qty + 1)}>
                    <Text style={styles.qtyButton}>+</Text>
                  </TouchableOpacity>
                </View>
                <Text style={styles.price}>${(item.price * item.qty).toFixed(2)}</Text>
                <TouchableOpacity onPress={() => removeFromCart(item.id)}>
                  <Text style={styles.remove}>Remove</Text>
                </TouchableOpacity>
              </View>
            )}
          />

          <View style={styles.footer}>
            <Text style={styles.total}>Total: ${totalPrice.toFixed(2)}</Text>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 16, textAlign: 'center' },
  empty: { textAlign: 'center', fontSize: 16, color: '#777', marginTop: 50 },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  name: { flex: 2, fontSize: 16 },
  qtyRow: { flexDirection: 'row', alignItems: 'center' },
  qtyButton: {
    fontSize: 18, paddingHorizontal: 10, color: '#1e90ff', fontWeight: 'bold'
  },
  qtyText: { fontSize: 16, marginHorizontal: 6 },
  price: { flex: 1, textAlign: 'right', fontWeight: '600' },
  remove: { color: 'red', fontSize: 13, marginLeft: 10 },
  footer: { marginTop: 20, alignItems: 'center' },
  total: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  checkoutButton: {
    backgroundColor: '#1e90ff', padding: 15, borderRadius: 10, width: '80%', alignItems: 'center'
  },
  checkoutText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
