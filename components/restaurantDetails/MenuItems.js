import React from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "http://3.bp.blogspot.com/-uVIOMw22TMM/TiwtBU8swJI/AAAAAAAAAEY/1_NrHK7lwxY/s1600/KABOB_chicken.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzling something",
    price: "$19.20",
    image:
      "http://3.bp.blogspot.com/-uVIOMw22TMM/TiwtBU8swJI/AAAAAAAAAEY/1_NrHK7lwxY/s1600/KABOB_chicken.jpg",
  },
  {
    title: "Chilaquiles",
    description: "Chilaquiles with cheese and sauce. A delicious mexican dish.",
    price: "$14.50",
    image:
      "http://3.bp.blogspot.com/-uVIOMw22TMM/TiwtBU8swJI/AAAAAAAAAEY/1_NrHK7lwxY/s1600/KABOB_chicken.jpg",
  },
  {
    title: "Haleem",
    description: "Shivajinagar Haleem, Ramzan Special from Hyderabadi Chef",
    price: "$13.50",
    image:
      "http://3.bp.blogspot.com/-uVIOMw22TMM/TiwtBU8swJI/AAAAAAAAAEY/1_NrHK7lwxY/s1600/KABOB_chicken.jpg",
  },
  {
    title: "Tunday Kebab",
    description: "Mixed meat Kebab of my own imagination, I am a vegetarian",
    price: "$20.50",
    image:
      "http://3.bp.blogspot.com/-uVIOMw22TMM/TiwtBU8swJI/AAAAAAAAAEY/1_NrHK7lwxY/s1600/KABOB_chicken.jpg",
  },
];

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },
  titleStyle: {
    fontSize: 19,
    fontWeight: "600",
  },
});

export default function MenuItems() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food) => (
        <View key={food.title}>
          <View style={styles.menuItemStyle}>
            <BouncyCheckbox
              iconStyle={{
                borderColor: "lightgray",
                borderRadius: 0,
              }}
              fillColor="green"
            />
            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider
            width={0.5}
            orientation="vertical"
            style={{ marginHorizontal: 20 }}
          />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = ({ food }) => (
  <View style={{ width: 240, justifyContent: "space-evenly" }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);

const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{ width: 100, height: 100, borderRadius: 8 }}
    />
  </View>
);
