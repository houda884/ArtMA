import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Search, ChevronRight } from 'lucide-react-native';
import { colors } from '@/constants/colors';
import { featuredArtisans, categories, popularProducts } from '@/utils/mockData';
import ProductCard from '@/components/ProductCard';
import ArtisanCard from '@/components/ArtisanCard';
import { TextInput } from 'react-native-gesture-handler';

export default function HomeScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTextContainer}>
          <Text style={styles.greeting}>Salut! 👋</Text>
          <Text style={styles.headerTitle}>Découvrez l"artisanat marocain authentique</Text>
        </View>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search color={colors.textMedium} size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Rechercher des produits ou des artisans..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Categories */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Catégories</Text>
            <TouchableOpacity 
              style={styles.seeAllButton}
              onPress={() => router.push('/categories')}
            >
              <Text style={styles.seeAllText}>Voir tout</Text>
              <ChevronRight color={colors.primary} size={16} />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity 
                style={styles.categoryItem}
                onPress={() => router.push({
                  pathname: '/categories',
                  params: { category: item.id }
                })}
              >
                <Image source={{ uri: item.imageUrl }} style={styles.categoryImage} />
                <View style={styles.categoryOverlay} />
                <Text style={styles.categoryName}>{item.name}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.categoriesContainer}
          />
        </View>
        
        {/* Featured Artisans */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Artisans sélectionnés</Text>
            <TouchableOpacity 
              style={styles.seeAllButton}
              onPress={() => router.push('/artisans')}
            >
              <Text style={styles.seeAllText}>Voir tout</Text>
              <ChevronRight color={colors.primary} size={16} />
            </TouchableOpacity>
          </View>
          
          <FlatList
            data={featuredArtisans}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => (
              <ArtisanCard artisan={item} onPress={() => router.push(`/artisan/${item.id}`)} />
            )}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.artisansContainer}
          />
        </View>
        
        {/* Popular Products */}
        <View style={[styles.section, styles.lastSection]}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Produits populaires</Text>
            <TouchableOpacity 
              style={styles.seeAllButton}
              onPress={() => router.push('/products')}
            >
              <Text style={styles.seeAllText}>Voir tout</Text>
              <ChevronRight color={colors.primary} size={16} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.productsGrid}>
            {popularProducts.slice(0, 4).map(product => (
              <ProductCard 
                key={product.id}
                product={product}
                onPress={() => router.push(`/product/${product.id}`)}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  headerTextContainer: {
    width: '80%',
  },
  greeting: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.primary,
    marginBottom: 8,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.textDark,
    lineHeight: 32,
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textDark,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    marginTop: 24,
    paddingHorizontal: 24,
  },
  lastSection: {
    paddingBottom: 100,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
  },
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  seeAllText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.primary,
  },
  categoriesContainer: {
    paddingRight: 16,
  },
  categoryItem: {
    width: 140,
    height: 100,
    marginRight: 16,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
  },
  categoryOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  categoryName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.white,
    zIndex: 1,
  },
  artisansContainer: {
    paddingRight: 16,
  },
  productsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});