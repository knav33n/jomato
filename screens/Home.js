import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Divider } from "react-native-elements";
import BottomTabs from "../components/BottomTabs";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY = process.env.YELP_API_KEY;

const Home = () => {
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
        <RestaurantItems restaurants={restaurants} />
      </ScrollView>
      <Divider width={1} />
      <BottomTabs />
    </SafeAreaView>
  );
};

export default Home;
