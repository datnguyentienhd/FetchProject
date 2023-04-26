import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = () => {
  const navigation: any = useNavigation();
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Silver Tier" onPress={() => navigation.navigate('DetailScreen')} />
    </View>
  );
};

export default HomeScreen;