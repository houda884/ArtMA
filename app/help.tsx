import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';

export default function HelpScreen() {
  const router = useRouter();

  const faqItems = [
    {
      question: "Comment contacter un artisan ?",
      answer: "Vous pouvez contacter les artisans directement via la fonction de chat sur leur page de profil ou leurs listes de produits."
    },
    {
      question: "Quels modes de paiement sont acceptés ?",
      answer: "Nous acceptons les cartes de crédit/débit et les modes de paiement locaux. Tous les paiements sont sécurisés et cryptés."
    },
    {
      question: "Combien de temps prend l'expédition ?",
      answer: "Les délais de livraison varient selon le lieu et l'artisan. Les commandes arrivent généralement sous 3 à 7 jours ouvrés."
    },
    {
      question: "Puis-je retourner des articles ?",
      answer: "Oui, la plupart des articles peuvent être retournés sous 14 jours. Contactez directement l'artisan pour organiser le retour."
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <ArrowLeft color={colors.textDark} size={24} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Centre d'aide</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Questions fréquemment posées</Text>
          
          {faqItems.map((item, index) => (
            <TouchableOpacity key={index} style={styles.faqItem}>
              <View style={styles.faqContent}>
                <Text style={styles.question}>{item.question}</Text>
                <Text style={styles.answer}>{item.answer}</Text>
              </View>
              <ChevronRight color={colors.textLight} size={20} />
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.contactSection}>
          <Text style={styles.contactTitle}>Besoin d'aide supplémentaire ?</Text>
          <TouchableOpacity style={styles.contactButton}>
            <Text style={styles.contactButtonText}>Contacter le  Support</Text>
          </TouchableOpacity>
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
  },
  section: {
    padding: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 16,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
    borderRadius: 12,
    marginBottom: 12,
  },
  faqContent: {
    flex: 1,
    marginRight: 16,
  },
  question: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 4,
  },
  answer: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
  },
  contactSection: {
    padding: 24,
    alignItems: 'center',
  },
  contactTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 16,
  },
  contactButton: {
    backgroundColor: colors.primary,
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  contactButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.white,
  },
});