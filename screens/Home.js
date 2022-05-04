import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/Home/BottomTabs";
import Categories from "../components/Home/Categories";
import HeaderTabs from "../components/Home/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/Home/RestaurantItems";
import SearchBar from "../components/Home/SearchBar";
import { YELP_API_KEY } from "@env";

const Home = ({ navigation }) => {
  const [restaurants, setRestaurants] = useState(localRestaurants);
  const [city, setCity] = useState("San Fransico");
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = () => {
    const url = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const options = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setRestaurants(
          json.businesses.filter((b) =>
            b.transactions.includes(activeTab.toLowerCase())
          )
        );
      });
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city, activeTab]);

  return (
    <SafeAreaView style={{ backgroundColor: "#eee" }}>
      <View style={{ backgroundColor: "white", padding: 15 }}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar setCity={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurants={restaurants} navigation={navigation} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
