import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { ArrowLeft } from 'lucide-react-native';
import ProductCard from '@/components/ProductCard';
import { products } from '@/utils/mockData';

export default function FavoritesScreen() {
  const router = useRouter();
  const favoriteProducts = products.slice(0, 4); // Simulate favorite products

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color={colors.textDark} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Favoirs</Text>
      </View>

      <FlatList
        data={favoriteProducts}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductCard 
            product={item}
            onPress={() => router.push(`/product/${item.id}`)}
            containerStyle={styles.productCardContainer}
          />
        )}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.productsGrid}
        columnWrapperStyle={styles.productRow}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Aucun produit favori pour l'instant</Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
    backgroundColor: colors.white,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  backButton: {
    marginRight: 16,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.textDark,
  },
  productsGrid: {
    padding: 16,
    paddingBottom: 100,
  },
  productRow: {
    justifyContent: 'space-between',
  },
  productCardContainer: {
    width: '48%',
    marginBottom: 16,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  emptyText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textMedium,
    textAlign: 'center',
  },
});