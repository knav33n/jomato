import { Image, TouchableOpacity, View, Text } from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";

export const localRestaurants = [
  {
    name: "Absolute Barbeque",
    image_url:
      "https://cdn.vox-cdn.com/thumbor/c5cjORx-VUJQkkgHobjPR0tgKXA=/0x0:1500x998/2420x1613/filters:focal(630x379:870x619)/cdn.vox-cdn.com/uploads/chorus_image/image/64147886/JTP_6136.0.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 1244,
    rating: 4.5,
  },
  {
    name: "Thyme and Whisk",
    image_url:
      "https://columbiarestaurant.com/Photo-Video-Gallery/Photo-Video-Gallery/Ybor-City/Cafe-Dining-Room-Columbia-Ybor-City.jpg",
    categories: ["Cafe", "Bar"],
    price: "$$",
    reviews: 800,
    rating: 3.7,
  },
  {
    name: "1522",
    image_url:
      "https://cdn.vox-cdn.com/thumbor/jdPa1QG6Csh-wcwK6YaENlp4UAs=/0x2:2000x1127/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/47543277/Pintxo-2.0.0.jpg",
    categories: ["Pub", "Bar"],
    price: "$$",
    reviews: 700,
    rating: 4.0,
  },
];

export default function RestaurantItems({ restaurants }) {
  return (
    <TouchableOpacity activeOpacity={1} style={{ marginBottom: 30 }}>
      {restaurants.map((restaurant) => (
        <View
          key={restaurant.name}
          style={{ marginTop: 10, padding: 15, backgroundColor: "#fff" }}
        >
          <RestaurantImage uri={restaurant.image_url} />
          <RestaurantInfo restaurant={restaurant} />
        </View>
      ))}
    </TouchableOpacity>
  );
}

const RestaurantImage = ({ uri }) => {
  return (
    <>
      <Image
        source={{
          uri,
        }}
        style={{ width: "100%", height: 180 }}
      />
      <TouchableOpacity style={{ position: "absolute", right: 20, top: 20 }}>
        <MaterialCommunityIcons name="heart-outline" size={25} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

const RestaurantInfo = ({ restaurant }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
      }}
    >
      <View>
        <Text style={{ fontSize: 15, fontWeight: "bold" }}>
          {restaurant.name}
        </Text>
        <Text style={{ fontSize: 13, color: "gray" }}>30-45 . mins</Text>
      </View>
      <View
        style={{
          backgroundColor: "#eee",
          height: 30,
          width: 30,
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 15,
        }}
      >
        <Text>{restaurant.rating}</Text>
      </View>
    </View>
  );
};
