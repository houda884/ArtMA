import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { artisans, products } from '@/utils/mockData';
import { colors } from '@/constants/colors';
import { ArrowLeft, MapPin, MessageCircle, Star } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';
import ProductCard from '@/components/ProductCard';

export default function ArtisanProfileScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const artisan = artisans.find(a => a.id === id);
  const artisanProducts = products.filter(p => p.artisanId === id);
  
  const [selectedTab, setSelectedTab] = useState('products');
  
  if (!artisan) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Artisan introuvable</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Revenir en arrière </Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <Stack.Screen options={{ headerShown: false }} />
      
      {/* Cover Image */}
      <View style={styles.coverContainer}>
        <Image 
          source={{ uri: artisan.coverImage || 'https://images.pexels.com/photos/4552350/pexels-photo-4552350.jpeg' }}
          style={styles.coverImage}
        />
        <View style={styles.coverOverlay} />
        
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color={colors.white} size={24} />
        </TouchableOpacity>
      </View>
      
      {/* Profile Header */}
      <View style={styles.profileHeader}>
        <View style={styles.avatarContainer}>
          <Image source={{ uri: artisan.avatar }} style={styles.avatar} />
        </View>
        
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{artisan.name}</Text>
          
          <View style={styles.locationContainer}>
            <MapPin color={colors.textMedium} size={14} />
            <Text style={styles.locationText}>{artisan.location}</Text>
          </View>
          
          <View style={styles.ratingContainer}>
            <Star fill={colors.warning} color={colors.warning} size={14} />
            <Text style={styles.ratingText}>
              {artisan.rating} • {artisan.reviewCount} Avis
            </Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.messageButton}
          onPress={() => router.push(`/chat/${artisan.id}`)}
        >
          <MessageCircle color={colors.white} size={20} />
        </TouchableOpacity>
      </View>
      
      {/* Tabs */}
      <View style={styles.tabsContainer}>
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'products' && styles.tabActive]}
          onPress={() => setSelectedTab('products')}
        >
          <Text style={[styles.tabText, selectedTab === 'products' && styles.tabTextActive]}>
            Products
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'about' && styles.tabActive]}
          onPress={() => setSelectedTab('about')}
        >
          <Text style={[styles.tabText, selectedTab === 'about' && styles.tabTextActive]}>
            About
          </Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.tab, selectedTab === 'reviews' && styles.tabActive]}
          onPress={() => setSelectedTab('reviews')}
        >
          <Text style={[styles.tabText, selectedTab === 'reviews' && styles.tabTextActive]}>
            Avis
          </Text>
        </TouchableOpacity>
      </View>
      
      {/* Tab Content */}
      {selectedTab === 'products' && (
        <FlatList
          data={artisanProducts}
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
              <Text style={styles.emptyText}>Cet artisan n'a pas encore de produits disponibles.</Text>
            </View>
          }
        />
      )}
      
      {selectedTab === 'about' && (
        <ScrollView style={styles.aboutContainer} contentContainerStyle={styles.aboutContent}>
          <View style={styles.aboutSection}>
            <Text style={styles.aboutSectionTitle}>À propos {artisan.name}</Text>
            <Text style={styles.aboutText}>{artisan.bio}</Text>
          </View>
          
          <View style={styles.aboutSection}>
            <Text style={styles.aboutSectionTitle}>Spécialités</Text>
            <View style={styles.specialtyContainer}>
              {artisan.specialties.map((specialty, index) => (
                <View key={index} style={styles.specialtyItem}>
                  <Text style={styles.specialtyText}>{specialty}</Text>
                </View>
              ))}
            </View>
          </View>
          
          <View style={styles.aboutSection}>
            <Text style={styles.aboutSectionTitle}>Expérience</Text>
            <Text style={styles.aboutText}>{artisan.experience} Années d'expérience</Text>
          </View>
          
          <View style={styles.aboutSection}>
            <Text style={styles.aboutSectionTitle}>Atelier</Text>
            <View style={styles.workshopContainer}>
              <Image 
                source={{ uri: artisan.workshopImage || 'https://images.pexels.com/photos/4551301/pexels-photo-4551301.jpeg' }} 
                style={styles.workshopImage} 
              />
              <View style={styles.workshopInfo}>
                <View style={styles.locationContainer}>
                  <MapPin color={colors.textMedium} size={14} />
                  <Text style={styles.locationText}>{artisan.workshopLocation || artisan.location}</Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      )}
      
      {selectedTab === 'reviews' && (
        <ScrollView style={styles.reviewsContainer} contentContainerStyle={styles.reviewsContent}>
          <View style={styles.ratingOverview}>
            <View style={styles.ratingScoreContainer}>
              <Text style={styles.ratingScoreText}>{artisan.rating}</Text>
              <View style={styles.ratingStars}>
                {[1, 2, 3, 4, 5].map(star => (
                  <Star 
                    key={star}
                    fill={star <= Math.floor(artisan.rating) ? colors.warning : 'none'}
                    color={colors.warning}
                    size={16} 
                  />
                ))}
              </View>
              <Text style={styles.ratingCountText}>Based on {artisan.reviewCount} Avis</Text>
            </View>
          </View>
          
          {artisan.reviews && artisan.reviews.map((review, index) => (
            <View key={index} style={styles.reviewItem}>
              <View style={styles.reviewHeader}>
                <Image source={{ uri: review.userAvatar }} style={styles.reviewAvatar} />
                <View style={styles.reviewUser}>
                  <Text style={styles.reviewUserName}>{review.userName}</Text>
                  <View style={styles.reviewRating}>
                    {[1, 2, 3, 4, 5].map(star => (
                      <Star 
                        key={star}
                        fill={star <= review.rating ? colors.warning : 'none'}
                        color={colors.warning}
                        size={12} 
                      />
                    ))}
                  </View>
                </View>
                <Text style={styles.reviewDate}>{review.date}</Text>
              </View>
              <Text style={styles.reviewText}>{review.text}</Text>
            </View>
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  errorText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 16,
  },
  backButton: {
    position: 'absolute',
    top: 48,
    left: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  backButtonText: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 14,
  },
  coverContainer: {
    height: 200,
    position: 'relative',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  profileHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: -40,
    marginBottom: 24,
  },
  avatarContainer: {
    borderWidth: 4,
    borderColor: colors.white,
    borderRadius: 50,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 16,
  },
  profileName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 20,
    color: colors.textDark,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 4,
  },
  locationText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textMedium,
    marginLeft: 4,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textMedium,
    marginLeft: 4,
  },
  messageButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  tabsContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  tab: {
    flex: 1,
    paddingVertical: 16,
    alignItems: 'center',
  },
  tabActive: {
    borderBottomWidth: 2,
    borderBottomColor: colors.primary,
  },
  tabText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textMedium,
  },
  tabTextActive: {
    color: colors.primary,
  },
  productsGrid: {
    paddingHorizontal: 16,
    paddingTop: 16,
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
  aboutContainer: {
    flex: 1,
  },
  aboutContent: {
    padding: 24,
    paddingBottom: 100,
  },
  aboutSection: {
    marginBottom: 24,
  },
  aboutSectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 8,
  },
  aboutText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    lineHeight: 24,
  },
  specialtyContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specialtyItem: {
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  specialtyText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.textMedium,
  },
  workshopContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    backgroundColor: colors.white,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  workshopImage: {
    width: '100%',
    height: 200,
  },
  workshopInfo: {
    padding: 16,
  },
  reviewsContainer: {
    flex: 1,
  },
  reviewsContent: {
    padding: 24,
    paddingBottom: 100,
  },
  ratingOverview: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ratingScoreContainer: {
    alignItems: 'center',
  },
  ratingScoreText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: colors.textDark,
  },
  ratingStars: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  ratingCountText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textMedium,
  },
  reviewItem: {
    backgroundColor: colors.white,
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  reviewHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  reviewAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  reviewUser: {
    flex: 1,
    marginLeft: 12,
  },
  reviewUserName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textDark,
  },
  reviewRating: {
    flexDirection: 'row',
    marginTop: 4,
  },
  reviewDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textLight,
  },
  reviewText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    lineHeight: 22,
  },
});