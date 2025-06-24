import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

// import { useResponsive } from 'react-native-responsive-hook';
import Header from '../components/Header';

const NotificationsScreen: React.FC = () => {
  //   const { wp, hp } = useResponsive();

  const dummyData = Array(5).fill({
    title: 'Title Here',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  });

  return (
    <View style={styles.container}>
      <Header title="Notifications" />
      <FlatList
        data={dummyData}
        keyExtractor={(_, index) => index.toString()}
        contentContainerStyle={{ padding: 16 }}
        renderItem={() => (
          <View style={styles.card}>
            <View style={styles.iconContainer}>
              <Text style={{ fontWeight: 'bold' }}>V.</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={{ fontWeight: 'bold' }}>Title Here</Text>
              <Text numberOfLines={3} style={{ color: '#777' }}>
               Lorem Ipsum is simply dummy text of the printing and type setting industry. Lorem Ipsum has been the industry's standard dummy text.
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default NotificationsScreen;

const styles = StyleSheet.create({
  container: { flex: 1,backgroundColor: '#fff', },
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
    elevation: 0,
    borderColor:'#D7D7D7',
    borderWidth:1,
  },
  iconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#E6E0F8',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
});
