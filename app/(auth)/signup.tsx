import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Lock, Mail, Eye, EyeOff, User, ArrowLeft, Store } from 'lucide-react-native';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isArtisan, setIsArtisan] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const router = useRouter();

  const handleSignup = async () => {
    if (!name || !email || !password || password !== confirmPassword) return;
    
    setLoading(true);
    try {
      await signup(email, password, name, isArtisan);
      router.replace('/home');
    } catch (error) {
      console.error('Signup error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.backButton}>
              <ArrowLeft color={colors.textDark} size={24} />
            </TouchableOpacity>
          </Link>
          <Text style={styles.title}>Créer un compte</Text>
          <Text style={styles.subtitle}>Rejoignez notre communauté d"artisans et d"amateurs d"artisanat</Text>
        </View>

        <View style={styles.formContainer}>
          <View style={styles.userTypeContainer}>
            <TouchableOpacity 
              style={[styles.userTypeButton, !isArtisan && styles.userTypeButtonActive]}
              onPress={() => setIsArtisan(false)}
            >
              <User color={!isArtisan ? colors.white : colors.primary} size={20} />
              <Text style={[styles.userTypeText, !isArtisan && styles.userTypeTextActive]}>Acheteur</Text>
            </TouchableOpacity>
            
            <TouchableOpacity 
              style={[styles.userTypeButton, isArtisan && styles.userTypeButtonActive]}
              onPress={() => setIsArtisan(true)}
            >
              <Store color={isArtisan ? colors.white : colors.primary} size={20} />
              <Text style={[styles.userTypeText, isArtisan && styles.userTypeTextActive]}>Artisan</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputContainer}>
            <User color={colors.textMedium} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Full Name"
              value={name}
              onChangeText={setName}
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Mail color={colors.textMedium} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              keyboardType="email-address"
            />
          </View>
          
          <View style={styles.inputContainer}>
            <Lock color={colors.textMedium} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              onPress={() => setShowPassword(!showPassword)}
              style={styles.eyeIcon}
            >
              {showPassword ? 
                <EyeOff color={colors.textMedium} size={20} /> : 
                <Eye color={colors.textMedium} size={20} />
              }
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputContainer}>
            <Lock color={colors.textMedium} size={20} />
            <TextInput
              style={styles.input}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              secureTextEntry={!showPassword}
            />
          </View>
          
          <TouchableOpacity 
            style={[styles.signupButton, loading && styles.signupButtonDisabled]}
            onPress={handleSignup}
            disabled={loading}
          >
            <Text style={styles.signupButtonText}>
              {loading ? 'Creating Account...' : 'Create Account'}
            </Text>
          </TouchableOpacity>
          
          <Link href="/login" asChild>
            <TouchableOpacity style={styles.loginLink}>
              <Text style={styles.loginText}>
                Vous avez déjà un compte ? <Text style={styles.loginHighlight}>Se connecter</Text>
              </Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    padding: 24,
    paddingTop: 60,
  },
  backButton: {
    marginBottom: 16,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 28,
    color: colors.textDark,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
    color: colors.textMedium,
    marginTop: 8,
  },
  formContainer: {
    padding: 24,
    paddingTop: 16,
  },
  userTypeContainer: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  userTypeButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 8,
    paddingVertical: 12,
    marginHorizontal: 4,
  },
  userTypeButtonActive: {
    backgroundColor: colors.primary,
  },
  userTypeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    color: colors.primary,
    marginLeft: 8,
  },
  userTypeTextActive: {
    color: colors.white,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    height: 56,
    backgroundColor: colors.white,
  },
  input: {
    flex: 1,
    height: 56,
    marginLeft: 8,
    fontFamily: 'Poppins-Regular',
    color: colors.textDark,
  },
  eyeIcon: {
    padding: 8,
  },
  signupButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  signupButtonDisabled: {
    backgroundColor: colors.disabled,
  },
  signupButtonText: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 16,
  },
  loginLink: {
    marginTop: 24,
    alignItems: 'center',
  },
  loginText: {
    fontFamily: 'Poppins-Regular',
    color: colors.textMedium,
    fontSize: 14,
  },
  loginHighlight: {
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
});