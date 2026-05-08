import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { useLocalSearchParams, useRouter, Stack } from 'expo-router';
import { products, artisans } from '@/utils/mockData';
import { colors } from '@/constants/colors';
import { Heart, ArrowLeft, MessageCircle, Share2, ChevronLeft, ChevronRight } from 'lucide-react-native';
import { StatusBar } from 'expo-status-bar';

const { width } = Dimensions.get('window');

export default function ProductDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const product = products.find(p => p.id === id);
  const artisan = artisans.find(a => a.id === product?.artisanId);
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);

  if (!product || !artisan) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorText}>Produit introuvable</Text>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Text style={styles.backButtonText}>Revenir</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => 
      prev === 0 ? product.images.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => 
      prev === product.images.length - 1 ? 0 : prev + 1
    );
  };

  const handleContactArtisan = () => {
    router.push(`/chat/${artisan.id}`);
  };

  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <Stack.Screen options={{ headerShown: false }} />

      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* Image Gallery */}
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: product.images[currentImageIndex] }}
            style={styles.productImage}
            resizeMode="cover"
          />
          
          <TouchableOpacity 
            style={styles.backButtonIcon}
            onPress={() => router.back()}
          >
            <ArrowLeft color={colors.white} size={24} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.favoriteButton, isFavorite && styles.favoriteButtonActive]}
            onPress={() => setIsFavorite(!isFavorite)}
          >
            <Heart 
              color={isFavorite ? colors.white : colors.primary} 
              fill={isFavorite ? colors.primary : 'none'}
              size={20} 
            />
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.shareButton}>
            <Share2 color={colors.white} size={20} />
          </TouchableOpacity>

          {/* Image Navigation */}
          {product.images.length > 1 && (
            <>
              <TouchableOpacity 
                style={[styles.imageNavButton, styles.prevButton]}
                onPress={handlePrevImage}
              >
                <ChevronLeft color={colors.white} size={24} />
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.imageNavButton, styles.nextButton]}
                onPress={handleNextImage}
              >
                <ChevronRight color={colors.white} size={24} />
              </TouchableOpacity>
              
              <View style={styles.imageIndicators}>
                {product.images.map((_, index) => (
                  <View 
                    key={index}
                    style={[
                      styles.imageIndicator,
                      index === currentImageIndex && styles.imageIndicatorActive
                    ]}
                  />
                ))}
              </View>
            </>
          )}
        </View>
        
        <View style={styles.contentContainer}>
          {/* Product Details */}
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{product.name}</Text>
            <Text style={styles.productPrice}>{product.price} MAD</Text>
          </View>
          
          <View style={styles.productCategory}>
            <Text style={styles.categoryText}>
              {product.category}
            </Text>
          </View>
          
          {/* Artisan Info */}
          <TouchableOpacity 
            style={styles.artisanContainer}
            onPress={() => router.push(`/artisan/${artisan.id}`)}
          >
            <Image source={{ uri: artisan.avatar }} style={styles.artisanAvatar} />
            <View style={styles.artisanInfo}>
              <Text style={styles.artisanName}>{artisan.name}</Text>
              <Text style={styles.artisanLocation}>{artisan.location}</Text>
            </View>
            <ChevronRight color={colors.textLight} size={20} />
          </TouchableOpacity>
          
          {/* Description */}
          <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>{product.description}</Text>
          </View>
          
          {/* Materials */}
          {product.materials && product.materials.length > 0 && (
            <View style={styles.materialsContainer}>
              <Text style={styles.materialsTitle}>Matérièls</Text>
              <View style={styles.materialsList}>
                {product.materials.map((material, index) => (
                  <View key={index} style={styles.materialItem}>
                    <Text style={styles.materialText}>{material}</Text>
                  </View>
                ))}
              </View>
            </View>
          )}
          
          {/* Dimensions */}
          {product.dimensions && (
            <View style={styles.dimensionsContainer}>
              <Text style={styles.dimensionsTitle}>Dimensions</Text>
              <Text style={styles.dimensionsText}>{product.dimensions}</Text>
            </View>
          )}
        </View>
      </ScrollView>
      
      {/* Bottom Action Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity 
          style={styles.contactButton}
          onPress={handleContactArtisan}
        >
          <MessageCircle color={colors.white} size={20} />
          <Text style={styles.contactButtonText}>Contact Artisan</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 24,
    paddingVertical: 12,
    backgroundColor: colors.primary,
    borderRadius: 8,
  },
  backButtonText: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 14,
  },
  scrollView: {
    flex: 1,
  },
  imageContainer: {
    width: width,
    height: 400,
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  backButtonIcon: {
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
  favoriteButton: {
    position: 'absolute',
    top: 48,
    right: 64,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  favoriteButtonActive: {
    backgroundColor: colors.primary,
  },
  shareButton: {
    position: 'absolute',
    top: 48,
    right: 16,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  imageNavButton: {
    position: 'absolute',
    top: '50%',
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    justifyContent: 'center',
    alignItems: 'center',
    transform: [{ translateY: -20 }],
  },
  prevButton: {
    left: 16,
  },
  nextButton: {
    right: 16,
  },
  imageIndicators: {
    position: 'absolute',
    bottom: 16,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  imageIndicatorActive: {
    backgroundColor: colors.white,
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  contentContainer: {
    padding: 24,
    paddingBottom: 100,
  },
  productInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  productName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.textDark,
    flex: 1,
  },
  productPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 22,
    color: colors.primary,
    marginLeft: 8,
  },
  productCategory: {
    marginBottom: 24,
  },
  categoryText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textMedium,
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
  },
  artisanContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 24,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  artisanAvatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  artisanInfo: {
    flex: 1,
    marginLeft: 16,
  },
  artisanName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textDark,
  },
  artisanLocation: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
  },
  descriptionContainer: {
    marginBottom: 24,
  },
  descriptionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 8,
  },
  descriptionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    lineHeight: 24,
  },
  materialsContainer: {
    marginBottom: 24,
  },
  materialsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 8,
  },
  materialsList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  materialItem: {
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
  },
  materialText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.textMedium,
  },
  dimensionsContainer: {
    marginBottom: 24,
  },
  dimensionsTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 8,
  },
  dimensionsText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: colors.border,
    flexDirection: 'row',
  },
  contactButton: {
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 12,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  contactButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.white,
    marginLeft: 8,
  },
});