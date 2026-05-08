import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '@/constants/colors';
import { MapPin, Star } from 'lucide-react-native';

interface ArtisanCardProps {
  artisan: {
    id: string;
    name: string;
    avatar: string;
    location: string;
    rating: number;
    specialties: string[];
  };
  onPress: () => void;
}

export default function ArtisanCard({ artisan, onPress }: ArtisanCardProps) {
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Image 
        source={{ uri: artisan.avatar }}
        style={styles.avatar}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{artisan.name}</Text>
        
        <View style={styles.locationContainer}>
          <MapPin size={12} color={colors.textMedium} />
          <Text style={styles.locationText}>{artisan.location}</Text>
        </View>
        
        <View style={styles.ratingContainer}>
          <Star size={12} color={colors.warning} fill={colors.warning} />
          <Text style={styles.ratingText}>{artisan.rating}</Text>
        </View>
        
        <View style={styles.specialtiesContainer}>
          {artisan.specialties.slice(0, 2).map((specialty, index) => (
            <View key={index} style={styles.specialtyTag}>
              <Text style={styles.specialtyText}>{specialty}</Text>
            </View>
          ))}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 160,
    backgroundColor: colors.white,
    borderRadius: 12,
    overflow: 'hidden',
    marginRight: 16,
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  avatar: {
    width: '100%',
    height: 120,
  },
  contentContainer: {
    padding: 12,
  },
  name: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textDark,
    marginBottom: 4,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
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
    marginBottom: 8,
  },
  ratingText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.textMedium,
    marginLeft: 4,
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  specialtyTag: {
    backgroundColor: colors.backgroundDark,
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
    marginRight: 4,
    marginBottom: 4,
  },
  specialtyText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: colors.textMedium,
  },
});