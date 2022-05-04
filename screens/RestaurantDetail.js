import React from "react";
import { View } from "react-native";
import { Divider } from "react-native-elements";
import About from "../components/restaurantDetails/About";
import MenuItems from "../components/restaurantDetails/MenuItems";
import ViewCart from "../components/restaurantDetails/ViewCart";

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      <Divider width={1.8} style={{ marginVertical: 20 }} />
      <MenuItems />
      <ViewCart navigation={navigation} restaurantName={route.params.name} />
    </View>
  );
}
