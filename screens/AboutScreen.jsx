import React from "react";
import { View, Text, StyleSheet } from "react-native";
import MainLayout from "../layouts/MainLayout";

const AboutScreen = () => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <MainLayout>
      <View>
        <Text style={styles.text}>App Name: ToDo Navigator</Text>
        <Text style={styles.text}>Developer: Robin Suthar</Text>
        <Text style={styles.text}>Date: {currentDate}</Text>
      </View>
    </MainLayout>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    marginVertical: 5,
  },
});

export default AboutScreen;
