import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image, TextInput } from 'react-native';
import { useRouter } from 'expo-router';
import { colors } from '@/constants/colors';
import { conversations } from '@/utils/mockData';
import { Search } from 'lucide-react-native';

export default function ChatScreen() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const filteredConversations = searchQuery 
    ? conversations.filter(conv => 
        conv.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : conversations;

  const renderLastMessageTime = (timestamp) => {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    
    if (days === 0) {
      // Today: show time
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (days === 1) {
      // Yesterday
      return 'Yesterday';
    } else if (days < 7) {
      // Less than a week
      const options = { weekday: 'short' };
      return date.toLocaleDateString(undefined, options);
    } else {
      // More than a week
      const options = { month: 'short', day: 'numeric' };
      return date.toLocaleDateString(undefined, options);
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Messages</Text>
      </View>
      
      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Search color={colors.textMedium} size={20} />
          <TextInput
            style={styles.searchInput}
            placeholder="Chercher les conversations..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
      </View>
      
      {/* Conversation List */}
      <FlatList
        data={filteredConversations}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity 
            style={styles.conversationItem}
            onPress={() => router.push(`/chat/${item.id}`)}
          >
            <View style={styles.avatarContainer}>
              <Image source={{ uri: item.avatar }} style={styles.avatar} />
              {item.isOnline && <View style={styles.onlineIndicator} />}
            </View>
            
            <View style={styles.conversationContent}>
              <View style={styles.conversationHeader}>
                <Text style={styles.conversationName}>{item.name}</Text>
                <Text style={styles.conversationTime}>
                  {renderLastMessageTime(item.lastMessage.timestamp)}
                </Text>
              </View>
              
              <View style={styles.conversationFooter}>
                <Text 
                  style={[
                    styles.conversationLastMessage,
                    !item.read && styles.conversationLastMessageUnread
                  ]}
                  numberOfLines={1}
                >
                  {item.lastMessage.text}
                </Text>
                
                {!item.read && (
                  <View style={styles.unreadBadge}>
                    <Text style={styles.unreadBadgeText}>{item.unreadCount}</Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={styles.conversationsList}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>Aucune conversation pour le moment</Text>
            <Text style={styles.emptySubtitle}>
              Commencez à parcourir les produits et envoyez un message aux artisans pour démarrer une conversation.
            </Text>
          </View>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 24,
    paddingBottom: 16,
  },
  headerTitle: {
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    color: colors.textDark,
  },
  searchContainer: {
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: colors.border,
  },
  searchInput: {
    flex: 1,
    marginLeft: 12,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textDark,
  },
  conversationsList: {
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  conversationItem: {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.border,
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  onlineIndicator: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: colors.success,
    borderWidth: 2,
    borderColor: colors.white,
  },
  conversationContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  conversationHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },
  conversationName: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: colors.textDark,
  },
  conversationTime: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.textLight,
  },
  conversationFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  conversationLastMessage: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    flex: 1,
  },
  conversationLastMessageUnread: {
    fontFamily: 'Poppins-Medium',
    color: colors.textDark,
  },
  unreadBadge: {
    backgroundColor: colors.primary,
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginLeft: 8,
  },
  unreadBadgeText: {
    fontFamily: 'Poppins-Medium',
    fontSize: 12,
    color: colors.white,
  },
  emptyContainer: {
    marginTop: 60,
    alignItems: 'center',
    paddingHorizontal: 32,
  },
  emptyTitle: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: colors.textDark,
    marginBottom: 8,
  },
  emptySubtitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: colors.textMedium,
    textAlign: 'center',
    lineHeight: 22,
  },
});