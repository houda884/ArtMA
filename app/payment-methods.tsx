import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { ArrowLeft, Plus, CreditCard } from 'lucide-react-native';

export default function PaymentMethodsScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color={colors.textDark} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Méthodes de paiment</Text>
      </View>

      <ScrollView style={styles.content}>
        <TouchableOpacity style={styles.addCardButton}>
          <Plus color={colors.primary} size={24} />
          <Text style={styles.addCardText}>ajouter une nouvelle carte bancaire</Text>
        </TouchableOpacity>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Cartes enregistrées</Text>

          <View style={styles.cardItem}>
            <View style={styles.cardIcon}>
              <CreditCard color={colors.primary} size={24} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardNumber}>•••• •••• •••• 4242</Text>
              <Text style={styles.cardExpiry}>Expirés 12/25</Text>
            </View>
            <TouchableOpacity style={styles.defaultBadge}>
              <Text style={styles.defaultText}>Défaut</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.cardItem}>
            <View style={styles.cardIcon}>
              <CreditCard color={colors.textMedium} size={24} />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardNumber}>•••• •••• •••• 8888</Text>
              <Text style={styles.cardExpiry}>Expirés 09/24</Text>
            </View>
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
  content: {
    flex: 1,
    padding: 24,
  },
  addCardButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: colors.primary,
    marginBottom: 24,
  },
  addCardText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.primary,
    marginLeft: 8,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 16,
  },
  cardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
  },
  cardIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: colors.backgroundDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContent: {
    marginLeft: 16,
    flex: 1,
  },
  cardNumber: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textDark,
  },
  cardExpiry: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    marginTop: 2,
  },
  defaultBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    backgroundColor: colors.primaryLight,
    borderRadius: 16,
  },
  defaultText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.primary,
  },
});