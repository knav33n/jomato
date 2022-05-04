import { View, Text } from "react-native";
import React from "react";
import { Image } from "react-native";

// const yelpRestaurantInfo = {
//   name: "Farmhouse Kitchen Thai Cuisine",
//   image:
//     "https://cdn.vox-cdn.com/thumbor/c5cjORx-VUJQkkgHobjPR0tgKXA=/0x0:1500x998/2420x1613/filters:focal(630x379:870x619)/cdn.vox-cdn.com/uploads/chorus_image/image/64147886/JTP_6136.0.jpg",
//   price: "$$",
//   reviews: "1500",
//   rating: 4.5,
//   categories: [{ title: "Thai" }, { title: "Comfort Food" }],
// };

// const { name, image, price, reviews, rating, categories } = yelpRestaurantInfo;
// const formattedCategories = categories.map((cat) => cat.title).join(" . ");
// const description = `${formattedCategories} ${
//   price ? " * " + price : ""
// } * ${rating} * (${reviews}+)`;

export default function About({ route }) {
  const { name, image, price, reviews, rating, categories } = route.params;
  const formattedCategories = categories.map((cat) => cat.title).join(" . ");
  const description = `${formattedCategories} ${
    price ? " * " + price : ""
  } * ${rating} * (${reviews}+)`;

  return (
    <View>
      <RestaurantImage image={image} />
      <RestaurantTitle name={name} />
      <RestaurantDescription desc={description} />
    </View>
  );
}

const RestaurantImage = ({ image }) => (
  <Image source={{ uri: image }} style={{ width: "100%", height: 180 }} />
);

const RestaurantTitle = ({ name }) => (
  <Text
    style={{
      fontSize: 29,
      fontWeight: "600",
      marginTop: 18,
      marginHorizontal: 15,
    }}
  >
    {name}
  </Text>
);

const RestaurantDescription = ({ desc }) => (
  <Text
    style={{
      marginTop: 18,
      marginHorizontal: 15,
      fontWeight: "400",
      fontSize: 15.5,
    }}
  >
    {desc}
  </Text>
);
