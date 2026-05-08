import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { ArrowLeft } from 'lucide-react-native';

export default function PrivacyScreen() {
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
        <Text style={styles.headerTitle}>politique de confidentialité</Text>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Informations que nous collectons</Text>
          <Text style={styles.text}>
            Nous collectons les informations que vous nous fournissez directement, notamment lorsque vous créez un compte, effectuez un achat ou communiquez avec des artisans. Ces informations peuvent inclure votre nom, votre adresse e-mail, votre numéro de téléphone et vos informations de paiement.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Comment nous utilisons vos informations</Text>
          <Text style={styles.text}>
           Nous utilisons les informations que nous collectons pour fournir et améliorer nos services, traiter vos transactions, communiquer avec vous et maintenir la sécurité de notre plateforme.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Partage d'informations</Text>
          <Text style={styles.text}>
            Nous partageons vos informations avec les artisans lorsque vous effectuez un achat ou communiquez avec eux via notre plateforme. Nous pouvons également partager vos informations avec des prestataires de services qui contribuent à l'exploitation de notre plateforme.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sécurité des données</Text>
          <Text style={styles.text}>
            Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos informations personnelles contre tout accès, altération, divulgation ou destruction non autorisés.</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Vos droits</Text>
          <Text style={styles.text}>
            Vous disposez d'un droit d'accès, de rectification et de suppression de vos informations personnelles. Vous pouvez également vous opposer à certains traitements de vos informations ou les restreindre.</Text> 
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contactez-nous</Text>
          <Text style={styles.text}>
            Pour toute question concernant notre politique de confidentialité ou la manière dont nous traitons vos informations, veuillez contacter notre équipe chargée de la confidentialité à l'adresse privacy@craftconnect.com.</Text>
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
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    lineHeight: 24,
  },
});