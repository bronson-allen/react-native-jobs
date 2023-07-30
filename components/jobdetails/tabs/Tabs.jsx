import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import { SIZES } from "../../../constants";
import styles from "./tabs.style";

const Tabs = ({ tabs, activeTab, setActiveTab }) => {
  const TabButton = ({ name, activeTab, onHandleSearchType }) => {
    return (
      <TouchableOpacity
        style={styles.btn(name, activeTab)}
        onPress={onHandleSearchType}
      >
        <Text style={styles.btnText(name, activeTab)}>{name}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({ item }) => (
          <TabButton
            name={item}
            activeTab={activeTab}
            onHandleSearchType={() => setActiveTab(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        contentContainerStyle={{ columnGap: SIZES.small / 2 }}
      />
    </View>
  );
};

export default Tabs;
