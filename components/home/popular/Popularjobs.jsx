import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { COLORS, SIZES } from "../../../constants";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import useFetch from "../../../hooks/useFetch";
import testData from "../../../app/test-data";

import styles from "./popularjobs.style";

const Popularjobs = () => {
  const router = useRouter();
  const data = testData;
  const isLoading = false;
  const error = null;
  // const { data, isLoading, error } = useFetch("search", {
  //   query: "React developer",
  //   num_pages: "1",
  // });

  console.log("data:", data);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          <FlatList
            data={[1, 2, 3, 4, 5, 6, 7, 8]}
            renderItem={({ item }) => <PopularJobCard item={item} />}
            keyExtractor={(item) => item?.job_id}
            contentContainerStyle={SIZES.medium}
            horizontal
          />
        )}
      </View>
    </View>
  );
};

export default Popularjobs;
