import { useLocalSearchParams } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

const ProductDetailScreen = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text> This is product detail for id: {id}</Text>
    </View>
  );
};

export default ProductDetailScreen;
