import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { useAuth } from '@/hooks/useAuth';
import { colors } from '@/constants/colors';
import { LinearGradient } from 'expo-linear-gradient';
import { Lock, Mail, Eye, EyeOff } from 'lucide-react-native';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) return;
    
    setLoading(true);
    try {
      await login(email, password);
      router.replace('/home');
    } catch (error) {
      console.error('Login error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.primary, colors.primaryDark]}
        style={styles.header}
      >
        <Image 
          source={{ uri: 'https://images.pexels.com/photos/4906483/pexels-photo-4906483.jpeg?auto=compress&cs=tinysrgb&w=600' }}
          style={styles.headerImage}
        />
        <View style={styles.overlay} />
        <Text style={styles.title}>Connexion des Artisans</Text>
        <Text style={styles.subtitle}>Découvrez les artisans marocains</Text>
      </LinearGradient>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Bienvenue de retour</Text>
        
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
        
        <TouchableOpacity 
          style={[styles.loginButton, loading && styles.loginButtonDisabled]}
          onPress={handleLogin}
          disabled={loading}
        >
          <Text style={styles.loginButtonText}>
            {loading ? 'Logging in...' : 'Log In'}
          </Text>
        </TouchableOpacity>
        
        <Link href="/signup" asChild>
          <TouchableOpacity style={styles.signupLink}>
            <Text style={styles.signupText}>
              Nouveau sur Craft Connect ? <Text style={styles.signupHighlight}>Inscription</Text>
            </Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    height: 280,
    justifyContent: 'flex-end',
    padding: 24,
    position: 'relative',
  },
  headerImage: {
    ...StyleSheet.absoluteFillObject,
    width: '100%',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 32,
    color: colors.white,
    zIndex: 1,
  },
  subtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 18,
    color: colors.white,
    marginBottom: 16,
    zIndex: 1,
  },
  formContainer: {
    flex: 1,
    padding: 24,
    backgroundColor: colors.background,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    marginTop: -24,
  },
  formTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.textDark,
    marginBottom: 24,
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
  loginButton: {
    backgroundColor: colors.primary,
    borderRadius: 8,
    height: 56,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  loginButtonDisabled: {
    backgroundColor: colors.disabled,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Medium',
    color: colors.white,
    fontSize: 16,
  },
  signupLink: {
    marginTop: 24,
    alignItems: 'center',
  },
  signupText: {
    fontFamily: 'Poppins-Regular',
    color: colors.textMedium,
    fontSize: 14,
  },
  signupHighlight: {
    fontFamily: 'Poppins-Bold',
    color: colors.primary,
  },
});