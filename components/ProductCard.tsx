import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/colors';
import { Heart } from 'lucide-react-native';

interface ProductCardProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    category: string;
  };
  onPress: () => void;
  containerStyle?: any;
}

export default function ProductCard({ product, onPress, containerStyle }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = React.useState(false);

  const handleFavoritePress = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity 
      style={[styles.container, containerStyle]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={{ uri: product.images[0] }}
          style={styles.image}
          resizeMode="cover"
        />
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={handleFavoritePress}
        >
          <Heart
            size={16} 
            color={isFavorite ? colors.white : colors.textMedium}
            fill={isFavorite ? colors.primary : 'none'}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.category}>{product.category}</Text>
        <Text style={styles.name} numberOfLines={1}>{product.name}</Text>
        <Text style={styles.price}>{product.price} MAD</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  imageContainer: {
    height: 160,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: isFavorite => isFavorite ? colors.primary : colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  contentContainer: {
    padding: 12,
  },
  category: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textMedium,
    marginBottom: 4,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 4,
  },
  price: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.primary,
  },
});