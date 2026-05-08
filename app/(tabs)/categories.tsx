import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { categories, products } from '@/utils/mockData';
import { colors } from '@/constants/colors';
import ProductCard from '@/components/ProductCard';
import { Filter } from 'lucide-react-native';

export default function CategoriesScreen() {
  const router = useRouter();
  const { category: initialCategory } = useLocalSearchParams();
  const [selectedCategory, setSelectedCategory] = useState(initialCategory || 'all');
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.categoryId === selectedCategory);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Catégories</Text>
        <TouchableOpacity 
          style={styles.filterButton}
          onPress={() => setShowFilters(!showFilters)}
        >
          <Filter size={20} color={colors.textDark} />
        </TouchableOpacity>
      </View>

      {/* Category Tabs */}
      <View style={styles.categoriesContainer}>
        <FlatList
          data={[{id: 'all', name: 'All'}, ...categories]}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <TouchableOpacity 
              style={[
                styles.categoryTab,
                selectedCategory === item.id && styles.categoryTabActive
              ]}
              onPress={() => setSelectedCategory(item.id)}
            >
              <Text 
                style={[
                  styles.categoryTabText,
                  selectedCategory === item.id && styles.categoryTabTextActive
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.categoriesList}
        />
      </View>

      {/* Product Grid */}
      <FlatList
        data={filteredProducts}
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
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View style={styles.resultsHeader}>
            <Text style={styles.resultsCount}>
              {filteredProducts.length} Produits trouvés
            </Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Aucun produit trouvé dans cette catégorie.</Text>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.textDark,
  },
  filterButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  categoriesContainer: {
    marginBottom: 16,
  },
  categoriesList: {
    paddingHorizontal: 16,
  },
  categoryTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginHorizontal: 8,
    borderRadius: 20,
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
  },
  categoryTabActive: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  categoryTabText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textMedium,
  },
  categoryTabTextActive: {
    color: colors.white,
  },
  resultsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  resultsCount: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textMedium,
  },
  productsGrid: {
    paddingHorizontal: 16,
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
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textMedium,
    textAlign: 'center',
  },
});