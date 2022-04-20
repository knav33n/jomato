import { View, Text } from "react-native";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { Ionicons, AntDesign } from "react-native-vector-icons";

const PLACES_API_KEY = process.env.PLACES_API_KEY;

const SearchBar = ({ setCity }) => {
  return (
    <View style={{ marginTop: 15, flexDirection: "row" }}>
      <GooglePlacesAutocomplete
        query={{ key: PLACES_API_KEY }}
        onPress={(data, details = null) => {
          const city = data.description.split(",")[0];
          setCity(city);
        }}
        placeholder="Search"
        renderLeftButton={() => (
          <View>
            <Ionicons name="location-sharp" size={24} />
          </View>
        )}
        renderRightButton={() => (
          <View
            style={{
              flexDirection: "row",
              marginRight: 8,
              backgroundColor: "white",
              padding: 9,
              borderRadius: 30,
              alignItems: "center",
            }}
          >
            <AntDesign
              name="clockcircle"
              size={11}
              style={{ marginRight: 5 }}
            />
            <Text>Search</Text>
          </View>
        )}
        styles={{
          textInput: {
            backgroundColor: "#eee",
            borderRadius: 20,
            fontWeight: "700",
            marginTop: 7,
          },
          textInputContainer: {
            backgroundColor: "#eee",
            borderRadius: 50,
            flexDirection: "row",
            alignItems: "center",
            marginRight: 10,
          },
        }}
      />
    </View>
  );
};

export default SearchBar;
