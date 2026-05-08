import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, Switch } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { useAuth } from '@/hooks/useAuth';
import { Settings, LogOut, Heart, ShoppingBag, User as UserIcon, ChevronRight, Camera, CreditCard as Edit3, CreditCard, Bell, CircleHelp as HelpCircle, Shield, Store } from 'lucide-react-native';

export default function ProfileScreen() {
  const router = useRouter();
  const { user, logout } = useAuth();
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  
  const isArtisan = user?.isArtisan || false;
  
  const handleLogout = async () => {
    await logout();
    router.replace('/login');
  };
  
  const handleEditProfile = () => {
    router.push('/edit-profile');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profil</Text>
        <TouchableOpacity style={styles.settingsButton}>
          <Settings color={colors.textDark} size={24} />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image 
              source={{ 
                uri: user?.photo || 'https://images.pexels.com/photos/3785424/pexels-photo-3785424.jpeg'
              }} 
              style={styles.profileImage} 
            />
            <TouchableOpacity style={styles.cameraButton}>
              <Camera color={colors.white} size={20} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>{user?.name || 'User Name'}</Text>
            <Text style={styles.profileEmail}>{user?.email || 'user@example.com'}</Text>
            
            <View style={styles.userTypeContainer}>
              <Text style={styles.userTypeText}>
                {isArtisan ? 'Artisan Account' : 'Buyer Account'}
              </Text>
            </View>
            
            <TouchableOpacity 
              style={styles.editButton}
              onPress={handleEditProfile}
            >
              <Edit3 color={colors.primary} size={16} />
              <Text style={styles.editButtonText}>Modifier le profil</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Account Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Compte</Text>
          
          {isArtisan && (
            <TouchableOpacity 
              style={styles.menuItem}
              onPress={() => router.push('/my-products')}
            >
              <Store color={colors.primary} size={20} />
              <Text style={styles.menuItemText}>Mes Produits</Text>
              <ChevronRight color={colors.textLight} size={20} style={styles.menuItemArrow} />
            </TouchableOpacity>
          )}
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/favorites')}
          >
            <Heart color={colors.accent} size={20} />
            <Text style={styles.menuItemText}>Favoirs</Text>
            <ChevronRight color={colors.textLight} size={20} style={styles.menuItemArrow} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/orders')}
          >
            <ShoppingBag color={colors.secondary} size={20} />
            <Text style={styles.menuItemText}>Orders</Text>
            <ChevronRight color={colors.textLight} size={20} style={styles.menuItemArrow} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/payment-methods')}
          >
            <CreditCard color={colors.textMedium} size={20} />
            <Text style={styles.menuItemText}> Méthodes de paiement</Text>
            <ChevronRight color={colors.textLight} size={20} style={styles.menuItemArrow} />
          </TouchableOpacity>
        </View>
        
        {/* Preferences Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Préférences</Text>
          
          <View style={styles.menuItem}>
            <Bell color={colors.warning} size={20} />
            <Text style={styles.menuItemText}>Notifications</Text>
            <Switch
              value={notificationsEnabled}
              onValueChange={setNotificationsEnabled}
              trackColor={{ false: colors.disabled, true: colors.primaryLight }}
              thumbColor={notificationsEnabled ? colors.primary : colors.white}
              style={styles.switch}
            />
          </View>
        </View>
        
        {/* Support Section */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/help')}
          >
            <HelpCircle color={colors.info} size={20} />
            <Text style={styles.menuItemText}>Centre d'aide</Text>
            <ChevronRight color={colors.textLight} size={20} style={styles.menuItemArrow} />
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => router.push('/privacy')}
          >
            <Shield color={colors.textMedium} size={20} />
            <Text style={styles.menuItemText}>Politique de confidentialité</Text>
            <ChevronRight color={colors.textLight} size={20} style={styles.menuItemArrow} />
          </TouchableOpacity>
        </View>
        
        {/* Logout Button */}
        <TouchableOpacity 
          style={styles.logoutButton}
          onPress={handleLogout}
        >
          <LogOut color={colors.error} size={20} />
          <Text style={styles.logoutButtonText}>Déconnection</Text>
        </TouchableOpacity>
        
        <View style={styles.versionContainer}>
          <Text style={styles.versionText}>Version 1.0.0</Text>
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
  settingsButton: {
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
  scrollView: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: colors.white,
  },
  cameraButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: colors.primary,
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.white,
  },
  profileInfo: {
    marginLeft: 16,
    flex: 1,
  },
  profileName: {
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    color: colors.textDark,
  },
  profileEmail: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    marginBottom: 8,
  },
  userTypeContainer: {
    backgroundColor: colors.primaryLight,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  userTypeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.primary,
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  editButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.primary,
    marginLeft: 6,
  },
  section: {
    marginBottom: 24,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    color: colors.textDark,
    marginBottom: 16,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  menuItemText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.textDark,
    marginLeft: 16,
    flex: 1,
  },
  menuItemArrow: {
    marginLeft: 'auto',
  },
  switch: {
    marginLeft: 'auto',
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 24,
    marginTop: 16,
    marginBottom: 24,
    paddingVertical: 16,
    backgroundColor: colors.errorLight,
    borderRadius: 12,
  },
  logoutButtonText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.error,
    marginLeft: 8,
  },
  versionContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  versionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textLight,
  },
});