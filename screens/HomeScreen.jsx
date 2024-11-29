// src/screens/HomeScreen.jsx
import React from "react";
import { Button } from "react-native";
import MainLayout from "../layouts/MainLayout";
import ToDoList from "../components/ToDoList";
import ToDoForm from "../components/ToDoForm";

const HomeScreen = ({ navigation }) => {
  const [tasks, setTasks] = React.useState([
    "Hurray!! One more month",
    "Do laundry",
    "Go to gym",
    "Walk dog",
    "ToDoLabs",
  ]);

  const addTask = (task) => {
    if (task.trim() !== "") {
      setTasks((prevTasks) => [...prevTasks, task]);
    }
  };

  return (
    <MainLayout>
      <ToDoList tasks={tasks} />
      <ToDoForm addTask={addTask} />
      <Button
        title="Go to About"
        onPress={() => navigation.navigate("About")}
      />
    </MainLayout>
  );
};

export default HomeScreen;
