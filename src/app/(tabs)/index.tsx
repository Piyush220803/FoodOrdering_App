import { StyleSheet, Text, View, Image } from "react-native";
import products from "../../../assets/data/products";
import Colors from "@/src/constants/Colors";
const product = products[0];

export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: product.image }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{product.name}</Text>
      <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 600,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    alignSelf: "center",
  },
  price: {
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
