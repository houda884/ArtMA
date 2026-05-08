import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { ArrowLeft, Package } from 'lucide-react-native';

export default function OrdersScreen() {
  const router = useRouter();

  const orders = [
    {
      id: '1',
      productName: 'Bol en céramique marocain artisanal',
      price: 350,
      status: 'Livré',
      date: '2025-06-15',
      image: 'https://images.pexels.com/photos/695202/pexels-photo-695202.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: '2',
      productName: 'Ensemble de carreaux de mosaïque Zellige',
      price: 1200,
      status: 'En transit',
      date: '2025-06-10',
      image: 'https://images.pexels.com/photos/936801/pexels-photo-936801.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    // Add more orders as needed
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
        <Text style={styles.headerTitle}>Mes commandes</Text>
      </View>

      <ScrollView style={styles.content}>
        {orders.map((order) => (
          <TouchableOpacity key={order.id} style={styles.orderCard}>
            <Image source={{ uri: order.image }} style={styles.productImage} />
            <View style={styles.orderInfo}>
              <Text style={styles.productName}>{order.productName}</Text>
              <Text style={styles.orderPrice}>{order.price} MAD</Text>
              <View style={styles.orderFooter}>
                <Text style={styles.orderDate}>{order.date}</Text>
                <View style={[
                  styles.statusBadge,
                  order.status === 'Delivered' ? styles.statusDelivered : styles.statusInTransit
                ]}>
                  <Text style={[
                    styles.statusText,
                    order.status === 'Delivered' ? styles.statusTextDelivered : styles.statusTextInTransit
                  ]}>{order.status}</Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  orderCard: {
    flexDirection: 'row',
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
  productImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  orderInfo: {
    flex: 1,
    marginLeft: 16,
  },
  productName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 4,
  },
  orderPrice: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.primary,
    marginBottom: 8,
  },
  orderFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderDate: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  statusDelivered: {
    backgroundColor: colors.successLight,
  },
  statusInTransit: {
    backgroundColor: colors.warningLight,
  },
  statusText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
  },
  statusTextDelivered: {
    color: colors.success,
  },
  statusTextInTransit: {
    color: colors.warning,
  },
});