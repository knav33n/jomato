import { View, Text, TouchableOpacity } from "react-native";

const HeaderTabs = ({ activeTab, setActiveTab }) => {
  return (
    <View style={{ flexDirection: "row", alignSelf: "center", paddingTop: 50 }}>
      <HeaderButton
        text="Delivery"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <HeaderButton
        text="Pickup"
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
    </View>
  );
};

export default HeaderTabs;

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={{
      backgroundColor: text === activeTab ? "black" : "white",
      paddingVertical: 6,
      paddingHorizontal: 16,
      borderRadius: 30,
    }}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={{
        color: text === activeTab ? "white" : "black",
        fontSize: 15,
        fontWeight: "900",
      }}
    >
      {text}
    </Text>
  </TouchableOpacity>
);
